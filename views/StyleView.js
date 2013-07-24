define(['jquery', 'underscore', 'global', 'loader', 'backbone'],
function($, _, Global, Loader, Backbone) {
    return Backbone.View.extend({
        css: null,
        loader: new Loader,
        initialize: function() {
            var $t = this;

            var url = Global.get('template')
                .getFileUrl('asset/css/dynamic.css');

            $p = $t.loader.load(url, 'text');

            $.when($p).then(function(result) {
                $t.css = _.template(result);

                $t.render();
            });
        },
        render: function() {
            var $t = this;

            var staticStyle = $(document.createElement('link'))
                .attr({
                    rel:    'stylesheet',
                    type:   'text/css',
                    href:   Global.get('template')
                                .getFileUrl('asset/css/default.css')
                });

            $('head').append(staticStyle);
        }
    });
});