define(['jquery', 'backbone', 'global', 'js/queue', 'views/FormPageView', 'views/TagViewFactory'],
function($, Backbone, Global, Queue, FormPageView, TagViewFactory) {
	return Backbone.View.extend({
        initialize: function() {
            var $t = this;
            
            Global.set('assetQueue', new Queue);

            $.when($t.loadTheme()).then(function() {             
                $t.render();
            });
        },
        loadTheme: function() {
            var $t = this;

            var $d = $.Deferred();

            var themeUrl = Global.get('template')
                .getFileUrl('theme.js');

            require([themeUrl], function(Theme) {
                new Theme({
                    template: Global.get('template')
                });
                
                $d.resolve();
            });

            return $d.promise();
        },
        render: function() {
            var $t = this;

            $t.setTitle($t.model.get('form')
                .get('currentPage').get('pageTitle'));

            var $form = new FormPageView({ model: $t.model.get('form') });

            $.when(Global.get('assetQueue').load()).then(function() {
                TagViewFactory.replaceTags($form.$el);
                
                $('body').html($form.el);
                $(window).scrollTop(0);
            });
        },
        setTitle: function(title) {
            document.title = title;
        }
	});
});