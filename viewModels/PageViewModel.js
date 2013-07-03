define(
['underscore', 'backbone', 'vpl/viewModel', 'models/FormModel', 'models/ContentCollection',
    'models/RuleMapCollection', 'models/TaggedValueModelFactory', 'models/TaggedValueMapCollection'],
function(_, Backbone, VplViewModel, FormModel, ContentCollection, RuleMapCollection,
    TaggedValueModelFactory, TaggedValueMapCollection
) {
    return VplViewModel.extend({
        isMapped: false,
        models: {form: new FormModel},
        assignVars: function(args) {
            var $t = this;

            // this should only need to be done once
            if(!$t.isMapped) {
                // assign page, sections and contents for rule mapping

                $t.addCollection('pages',       $t.getModel('form').getPages());
                $t.addCollection('sections',    $t.getModel('form').getSections());
                $t.addCollection('contents',    $t.getModel('form').getContents());

                $t.mapDisplayRules();
                $t.mapTaggedValues();

                console.log($t.getCollection('ruleMap'), 'Rule Map');
                console.log($t.getCollection('tagMap'), 'Tag Map');

                // bind change events and set starting values
                $t.getCollection('contents').each(function(content) {
                    var ruleMap = $t.getCollection('ruleMap').findWhere({
                        triggerContentId: content.get('contentId')
                    });

                    if(ruleMap) {
                        content.bind('change:value', function() {
                            _.each(ruleMap.get('models'), function(model) {
                                model.set('display', $t.checkDisplayRule(model.get('displayRule')));
                            });
                        });
                    }

                    var tagMap = $t.getCollection('tagMap').findWhere({
                        triggerContentId: content.get('contentId')
                    });

                    if(tagMap) {
                        content.bind('change:value', function() {
                            _.each(tagMap.get('models'), function(taggedValue) {
                                taggedValue.processTag(content.get('value'));
                            });
                        });
                    }

                    // @todo [dk] - set saved values
                    content.trigger('change:value');
                });

                $t.isMapped = true;
            }

            $t.addModel('page', $t.getModel('form').get('pages').findWhere({pageUrl: args.pageUrl}));

            // now that the display rules are processed, check that this page is okay to show
            if(!$t.getModel('page').get('display')) {
                // @todo [dk] - redirect to the next page
            }
        },
        mapDisplayRules: function() {
            var $t = this;

            var map = new RuleMapCollection();

            $t.getModel('form').get('pages').each(function(page) {                
                page.get('displayRule').get('rules').each(function(rule) {
                    map.addRuleMap(rule.get('triggerContentId'), page);
                });

                page.get('sections').each(function(section) {
                    section.get('displayRule').get('rules').each(function(rule) {
                        map.addRuleMap(rule.get('triggerContentId'), section);
                    });

                    section.get('contents').each(function(content) {
                        content.get('displayRule').get('rules').each(function(rule) {
                            map.addRuleMap(rule.get('triggerContentId'), content);
                        });
                    });
                });
            });

            $t.addCollection('ruleMap', map);
        },
        checkDisplayRule: function(displayRule) {
            var $t = this;

            var testMethod = function(rule) {
                return $t.compareByRule.call($t, rule);
            };

            if(displayRule.get('logicalOperator') == 'and') {
                return displayRule.get('rules').every(testMethod);
            } else {
                return displayRule.get('rules').some(testMethod);
            }
        },
        compareByRule: function(rule) {
            var $t = this;

            var ruleValue = rule.get('value');
            var formValue = $t.getCollection('contents')
                .findWhere({contentId: rule.get('triggerContentId')})
                .get('value');

            var operator = rule.get('operator');

            switch(operator) {
                case '>':
                    return (formValue > ruleValue);
                    break;
                case '<':
                    return (formValue < ruleValue);
                    break;
                case '>=':
                    return (formValue >= ruleValue);
                    break;
                case '<=':
                    return (formValue <= ruleValue);
                    break;
                case '!=':
                    return (formValue != ruleValue);
                case '==':
                default:
                    return (formValue == ruleValue);
                    break;
            }
        },
        addTaggedValues: function(taggedValues) {
            var $t = this;

            if(taggedValues) {
                if(!$t.getCollection('tagMap')) {
                    $t.addCollection('tagMap', new TaggedValueMapCollection);
                }

                _.each(taggedValues, function(taggedValue) {
                    $t.getCollection('tagMap')
                        .addTaggedValueMap(taggedValue.get('triggerContentId'), taggedValue);
                });
            }
        },
        mapTaggedValues: function() {
            var $t = this;

            // map page titles
            $t.getCollection('pages').each(function(page) {
                $t.addTaggedValues(TaggedValueModelFactory.getInstances(page, 'pageTitle'));
            });

            // map section titles
            $t.getCollection('sections').each(function(section) {
                $t.addTaggedValues(TaggedValueModelFactory.getInstances(section, 'sectionTitle'));
            });

            // map content attribute changes
            var tests = ['question', 'suggestedInput'];

            $t.getCollection('contents').each(function(content) {
                _.each(tests, function(property) {
                    if(content.get(property)) {
                        $t.addTaggedValues(TaggedValueModelFactory
                            .getInstances(content, property));
                    }
                });
            });
        }
    });
});
