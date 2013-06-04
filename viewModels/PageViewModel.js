define(
['underscore', 'backbone', 'vpl/viewModel', 'models/FormModel', 'models/ContentCollection',
    'models/RuleMapCollection'],
function(_, Backbone, VplViewModel, FormModel, ContentCollection, RuleMapCollection) {
    return VplViewModel.extend({
        models: {form: new FormModel},
        assignVars: function(args) {
            var $t = this;

            // assign page, sections and contents for rule mapping

            $t.addCollection('pages',       $t.getModel('form').getPages());
            $t.addCollection('sections',    $t.getModel('form').getSections());
            $t.addCollection('contents',    $t.getModel('form').getContents());

            $t.mapDisplayRules();

            console.log($t.getCollection('ruleMap'), 'Rule Map');

            // bind change events and set starting values
            $t.getCollection('contents').each(function(content) {
                var ruleMap = $t.getCollection('ruleMap').findWhere({
                    triggerContentId: content.get('contentId')
                });

                if(ruleMap) {
                    content.bind('change:value', function() {
                        _.each(ruleMap.get('entities'), function(model) {
                            model.set('display', $t.checkDisplayRule(model.get('displayRule')));
                        });
                    });
                }

                // PLACEHOLDER - triggers change events to set initial display rules
                content.trigger('change:value');
            });

            $t.addModel('page', $t.getCollection('pages').findWhere({pageUrl: args.pageUrl}));

            // now that the display rules are processed, check that this page is okay to show
            if(!$t.getModel('page').get('display')) {
                var atNow = null;
                $t.getCollection('pages').each(function(page, at) {
                    if(atNow != null) {
                        return;
                    }

                    if(page.get('pageUrl') == args.pageUrl) {
                        atNow = at;
                    }
                });

                var destination =
                    $t.getModel('form').get('formUrl') + '/' +
                    $t.getCollection('pages').at(atNow + 1).get('pageUrl');

                $t.addVar('destination', destination);
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
        }
    });
});
