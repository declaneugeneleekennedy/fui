define(['jquery', 'underscore', 'global', 'backbone'],
function($, _, Global, Backbone) {
    return Backbone.View.extend({
        templateUrl: null,
        html: null,
        initialize: function() {
            var $t = this;

            $t.template = Global.get('template');

            var $p = $t.template.getHtmlFile($t.templateUrl);

            $.when($p).then(function(html) {
                $t.html = _.template(html);
                $t.render();
            });
        },
        setTitle: function(title) {
            document.title = title;
        }
    });
});