define(['jquery', 'backbone',

    // models
    'models/DocumentModel',

    // views
    'views/DocumentView'],
function($, Backbone, DocumentModel, DocumentView) {
    return Backbone.Router.extend({

        routes: {
            '': 'home',            
            ':formUrl': 'formRoot',
            ':formUrl/:pageUrl(/:token)': 'formPage'
        },

        home: function() {
            console.log('Executing Router.home()');
        },

        formRoot: function(formUrl) {
            var $t = this;

            var model = new DocumentModel({
                formUrl: formUrl
            });

            var $p = model.fetch();

            $.when($p).then(function(result) {
                model.get('form').on('change:currentPage', function() {
                    $t.navigate(model.get('form').getPageUrl(), {trigger: true});
                });

                model.get('form').set('currentPage', model.get('form').getFirstPage());
            });
        },

        formPage: function(formUrl, pageUrl, applicationToken) {
            var $t = this;

            var model = new DocumentModel({
                formUrl:            formUrl,
                pageUrl:            pageUrl,
                applicationToken:   applicationToken
            });

            var $p = model.fetch();

            $.when($p).then(function() {
                model.get('form').on('change:currentPage', function() {
                    $t.navigate(model.get('form').getPageUrl(), {trigger: true});
                });

                new DocumentView({ model: model });
            });
        }
    });
});