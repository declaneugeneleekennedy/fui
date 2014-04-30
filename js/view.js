define(['jquery', 'underscore', 'loader',
    'global', 'backbone', 'js/styler','js/queue'],
function($, _, Loader, Global, Backbone, Styler, Queue) {
    return Backbone.View.extend({
        styler: new Styler({ id: 'view' }),
        templateUrl: null,
        html: null,
        initialize: function() {
            var $t = this;

            $t.beforeLoad();

            var $p = $t.getHtml($t.templateUrl);

            $.when($p).then(function() {
                if(!$t.html) {
                    $t.html = '<!-- ? -->';
                }

                $t.html = _.template($t.html);

                $t.render();

                $t.afterRender();
            });
        },
        addStylesheet: function(url) {
            var $t = this;

            $t.styler.addStylesheet(url);
        },
        addCss: function(selector, rules) {
            var $t = this;

            $t.styler.addCss(selector, rules);
        },
        beforeLoad: function() {
            console.log('Calling View.beforeLoad() no-op');
        },
        afterRender: function() {
            console.log('Calling View.afterRender() no-op');
        },
        getHtml: function(url) {
            var $t = this;

            var $p = $t.getTemplate().getHtmlFile(url);

            $.when($p).then(function(html) {
                $t.html = html;
            });

            return Global.get('assetQueue').add($p);
        },
        getTemplate: function() {
            var $t = this;

            if(!$t.template) {
                $t.template = Global.get('template');
            }

            return $t.template;
        }
    });
});