define(
['jquery', 'underscore', 'backbone', 'loader',
    'models/PageCollection', 'models/SectionCollection', 'models/ContentCollection',
    'models/RuleMapCollection', 'models/TaggedValueModelFactory', 'models/TaggedValueMapCollection'],
function($, _, Backbone, Loader,
    PageCollection, SectionCollection, ContentCollection,
    RuleMapCollection, TaggedValueModelFactory, TaggedValueMapCollection
) {
    return Backbone.Model.extend({
        loader: new Loader,
        idAttribute: 'formUrl',
        defaults: {
            applicationId:          null,
            formVerId:              1,
            formTitle:              null,
            formUrl:                null,
            progressBarEnabled:     false,
            progressBarFormat:      null,
            totalPersona:           1,
            saveAllowed:            false,
            signaturePanelEnabled:  false,
            pages:                  [],
            currentPageIndex:       1,
            currentPageUrl:         null,
            currentPage:            null
        },
        isMapped: false,
        initialize: function() {
            var $t = this;

            $t.set('pages', new PageCollection($t.get('pages')));

            if(!$t.isMapped) {
                $t.mapEvents();
            }
        },
        getPages: function() {
            var $t = this;

            return $t.get('pages');
        },
        getPageUrl: function() {
            var $t = this;

            return $t.get('formUrl') + '/' + 
                $t.get('currentPage').get('pageUrl');
        },
        getFirstPage: function() {
            var $t = this;

            return $t.getPages().first();
        },
        getLastPage: function() {
            var $t = this;

            return $t.getPages().last();
        },
        getNextPage: function() {
            var $t = this;

            return $t.getPages().next($t.get('currentPage'));
        },
        getPreviousPage: function() {
            var $t = this;

            return $t.getPages().previous($t.get('currentPage'));
        },
        getSections: function() {
            var $t = this;

            var sections = new SectionCollection;

            $t.get('pages').each(function(page) {
                page.get('sections').each(function(section) {
                    sections.add(section);
                });
            });

            return sections;
        },
        getContents: function() {
            var $t = this;

            var contents = new ContentCollection;

            $t.getSections().each(function(section) {
                section.get('contents').each(function(content) {
                    contents.add(content);
                });
            });

            return contents;
        },
        mapEvents: function() {
            var $t = this;

            // page change triggers
            $t.bind('change:currentPageUrl', function() {
                var currentPage = $t.get('pages')
                    .findWhere({ pageUrl: $t.get('currentPageUrl') });

                if(currentPage) {
                    $t.set('currentPage', currentPage);
                }
            });

            $t.bind('change:currentPage', function() {
                // silent to prevent loops
                $t.set({'currentPageUrl': $t.get('currentPage').get('pageUrl')}, {silent: true});
            });

            $t.mapDisplayRules();
            $t.mapTaggedValues();

            // bind handlers            
            $t.getContents().each(function(content) {

                // bind validation events
                content.bind('change:value', function() {
                    content.validate($t);
                });

                // bind display rule events
                var ruleMap = $t.get('ruleMap').findWhere({
                    triggerContentId: content.get('contentId')
                });

                if(ruleMap) {
                    content.bind('change:value', function() {
                        _.each(ruleMap.get('models'), function(model) {
                            model.set('display', $t.checkDisplayRule(model.get('displayRule')));
                        });
                    });
                }

                // bind tagged value events
                var tagMap = $t.get('tagMap').findWhere({
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
        },
        mapDisplayRules: function() {
            var $t = this;

            var map = new RuleMapCollection();

            $t.getPages().each(function(page) {                
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

            $t.set('ruleMap', map);
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
            var formValue = $t.getContents()
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
                if(!$t.get('tagMap')) {
                    $t.set('tagMap', new TaggedValueMapCollection);
                }

                _.each(taggedValues, function(taggedValue) {
                    $t.get('tagMap')
                        .addTaggedValueMap(taggedValue.get('triggerContentId'), taggedValue);
                });
            }
        },
        mapTaggedValues: function() {
            var $t = this;

            // map page titles
            $t.getPages().each(function(page) {
                $t.addTaggedValues(TaggedValueModelFactory.getInstances(page, 'pageTitle'));
            });

            // map section titles
            $t.getSections().each(function(section) {
                $t.addTaggedValues(TaggedValueModelFactory.getInstances(section, 'sectionTitle'));
            });

            // map content attribute changes
            var tests = ['question', 'suggestedInput'];

            $t.getContents().each(function(content) {
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