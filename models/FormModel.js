define(
['jquery', 'underscore', 'backbone',
    'models/PageCollection', 'models/SectionCollection', 'models/ContentCollection',
    'models/ApplicationModel', 'models/SavePageModel'],
function($, _, Backbone,
    PageCollection, SectionCollection, ContentCollection,
    ApplicationModel, SavePageModel
) {
    return Backbone.Model.extend({
        idAttribute: 'formUrl',
        urlRoot: dataHost + '/form',
        defaults: {
            application:            null,
            formVerId:              1,
            formTitle:              null,
            formUrl:                null,
            progressBarEnabled:     false,
            progressBarFormat:      null,
            totalPersona:           1,
            enableCompleteLater:    false,
            enableSignaturePanel:   false,
            pages:                  [],
            currentPageIndex:       1,
            currentPageUrl:         null,
            currentPage:            null,
            savePage:               null
        },
        initialize: function(attributes, options) {
            var $t = this;

            if($t.get('enableCompleteLater')) {
                $t.set('savePage', new SavePageModel);
            }

            $t.set('pages', new PageCollection($t.get('pages')));

            $t.mapEvents();
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
                // if complete later just go there immediately
                if($t.get('savePage') &&
                    $t.get('currentPageUrl') == $t.get('savePage').get('pageUrl')
                ) {
                    $t.set('currentPage', $t.get('savePage'));
                    return;
                }

                // perform validation if there is a currentPage to validate
                if($t.get('currentPage')) {
                    $t.get('currentPage').set('valid', $t.get('currentPage').validate($t));

                    // if the page isn't valid then change back the current URL and exit
                    if(!$t.get('currentPage').get('valid')) {
                        $t.set({ 'currentPageUrl': $t.get('currentPage')
                            .get('pageUrl') }, { silent: true });
                        return;
                    }
                }

                var page = $t.getPages().findWhere({
                    pageUrl: $t.get('currentPageUrl')
                });

                if(page) {
                    $t.set('currentPage', page);
                }
            });

            $t.bind('change:currentPage', function() {
                $t.get('currentPage').set('visited', true);
                $t.set({ 'currentPageUrl': $t.get('currentPage').get('pageUrl') }, {silent: true});
            });

            $t.getDisplayRuleModels().each(function(model) {
                model.get('displayRule').bindTo($t, model);
            });

            // bind handlers     
            $t.get('pages').each(function(page) {
                page.get('sections').each(function(section) {
                    section.get('contents').each(function(content) {
                        content.trigger('change:value');

                        // bind validation events
                        content.on('change:value', function() {
                            content.validate($t);
                            page.set('valid', page.validate());
                        });
                    });
                });
            });

            if($t.get('savePage')) {
                var page = $t.get('savePage');

                page.get('sections').each(function(section) {
                    section.get('contents').each(function(content) {
                        content.on('change:value', function() {
                            content.validate(null);
                            page.set('valid', page.validate());
                        });
                    });
                });
            }

            $t.on('change:application', function(form) {
                if(form.get('application').get('values').length) {
                    $t.updateContents(form.get('application'));
                }
            });
        },
        updateContents: function(application) {
            var $t = this;

            var applicationValue;
            $t.getContents().each(function(content) {
                applicationValue = application.get('values').findWhere({
                    contentId: content.get('contentId')
                });

                if(applicationValue) {
                    content.set('value', applicationValue.get('value'));
                }
            });
        },
        submit: function() {
            var $t = this;

            $t.getContents().each(function(content) {
                if(!content.get('value')) {
                    return;
                }

                if(!$t.get('application').get('values')
                    .findWhere({ contentId: content.get('contentId') })
                ) {
                    $t.get('application').get('values').add({
                        contentId:  content.get('contentId'),
                        value:      content.get('value')
                    });
                } else {
                    $t.get('application').get('values')
                        .findWhere({ contentId: content.get('contentId') })
                        .set('value', content.get('value'));
                }
            });

            var $p = $t.get('application').save();

            $.when($p).then(function() {
                $t.trigger('change:application', $t);
            });

            return $p;
        }
    });
});