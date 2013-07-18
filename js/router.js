define(['jquery', 'global', 'backbone', 'loader',

    // models
    'models/FormPageModel',

    // views
    'views/FormPageView'],
function($, Global, Backbone, Loader, FormPageModel, FormPageView) {
    return Backbone.Router.extend({
        loader: new Loader,

        routes: {
            '': 'home',            
            ':formUrl': 'formRoot',
            ':formUrl/:pageUrl': 'formPage'
        },

        home: function() {
            console.log('Executing Router.home()');
        },

        formRoot: function(formUrl) {
            var $t = this;

            var model = new FormPageModel({
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

        formPage: function(formUrl, pageUrl) {
            var $t = this;

            var model = new FormPageModel({
                formUrl: formUrl,
                pageUrl: pageUrl
            });

            var $p = model.fetch();

            $.when($p).then(function() {
                model.get('form').on('change:currentPage', function() {
                    $t.navigate(model.get('form').getPageUrl(), {trigger: true});
                });

                var view = new FormPageView({ model: model.get('form') });
                
                $('body').html(view.el);
            });
        }
    });
});