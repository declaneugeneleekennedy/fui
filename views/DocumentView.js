define(['jquery', 'backbone', 'views/FormView',
    'views/TagViewFactory', 'models/TemplateModelFactory'],
function($, Backbone, FormView,
    TagViewFactory, TemplateModelFactory
) {
	return Backbone.View.extend({
        initialize: function() {
            var $t = this;

            $t.setTitle($t.model.get('form')
                .get('currentPage').get('pageTitle'));

            $t.form = new FormView({ model: $t.model.get('form') });

            $.when($t.loadTheme()).then(function() {             
                $t.applyTheme();
            });
        },
        loadTheme: function() {
            var $t = this;

            var $d = $.Deferred();

            var themeUrl = $t.model.get('template')
                .getFileUrl('theme.js');

            require([themeUrl], function(Theme) {
                $t.theme = new Theme({
                    template: $t.model.get('template')
                });
                
                $d.resolve();
            });

            return $d.promise();
        },
        applyTheme: function() {
            var $t = this;

            $.when($t.form.loadHtml()).then(function() {
                $t.render();
            });
        },
        render: function() {
            var $t = this;

            $.when($t.theme.applyTheme()).then(function() {
                TagViewFactory.replaceTags($t.form.$el);
                
                $('body').empty()
                    .append($t.form.$el);
                    
                $(window).scrollTop(0);

                $t.theme.afterRender();
            });
        },
        setTitle: function(title) {
            document.title = title;
        }
	});
});