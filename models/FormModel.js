define(
['jquery', 'underscore', 'backbone',
    'models/PageCollection', 'models/SectionCollection', 'models/ContentCollection',
    'models/TaggedValueModelFactory', 'models/TaggedValueMapCollection'],
function($, _, Backbone,
    PageCollection, SectionCollection, ContentCollection,
    TaggedValueModelFactory, TaggedValueMapCollection
) {
    return Backbone.Model.extend({
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
        getNextPage: function(page) {
            var $t = this;

            if(!page) {
                page = $t.get('currentPage');
            }

            var next = $t.getPages().next(page);
            if(next) {
                if(!next.get('display')) {
                    return $t.getNextPage(next);
                }
            }

            return next;
        },
        getPreviousPage: function(page) {
            var $t = this;

            if(!page) {
                page = $t.get('currentPage');
            }

            var prev = $t.getPages().previous(page);
            if(prev) {
                if(!prev.get('display')) {
                    return $t.getPreviousPage(prev);
                }
            }

            return prev;
        },
        getSections: function() {
            var $t = this;

            var sections = new SectionCollection;

            $t.getPages().each(function(page) {
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
        getModels: function() {
            var $t = this;

            var methods = ['getPages', 'getSections', 'getContents'];

            var models = [];

            _.each(methods, function(name) {
                $t[name].call($t).each(function(model) {
                    models.push(model);
                });
            });

            return new Backbone.Collection(models);
        },
        getDisplayRuleModels: function() {
            var $t = this;

            return new Backbone.Collection($t.getModels().filter(function(model) {
                return model.get('displayRule').active();
            }));
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
                $t.set({ 'currentPageUrl': $t.get('currentPage').get('pageUrl') }, {silent: true});
            });

            $t.getDisplayRuleModels().each(function(model) {
                model.get('displayRule').bindTo($t, model);
            });

            $t.mapTaggedValues();

            // bind handlers            
            $t.getContents().each(function(content) {

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

                // bind validation events
                content.bind('change:value', function() {
                    content.validate($t);
                });
            });

            $t.isMapped = true;  
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
            var tests = ['question', 'suggestedInput', 'text'];

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