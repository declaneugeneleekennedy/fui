define(['jquery', 'underscore', 'loader',
    'backbone', 'js/styler','js/queue',
    'models/TemplateModelFactory'],
function($, _, Loader,
    Backbone, Styler, Queue,
    TemplateModelFactory
) {
    var htmlQueue   = new Queue;

    return Backbone.View.extend({
        styler: new Styler({ id: 'view' }),
        templateUrl: null,
        html: null,
        htmlQueue: htmlQueue,
        initialize: function(options) {
            var $t = this;

            $t.options = options;

            $t.beforeLoad();

            $t.addHtmlDependency($t.templateUrl);
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
        addHtmlDependency: function(url) {
            var $t = this;

            var $p = $t.getTemplate().getHtmlFile(url);

            $.when($p).then(function(html) {
                if(!html) {
                    html = '<!-- ? -->';
                }

                $t.html = _.template(html);

                $t.render();

                $t.afterRender();
            });

            return $t.htmlQueue.add($p);
        },
        loadHtml: function() {
            var $t = this;

            return $t.htmlQueue.load();
        },
        getTemplate: function() {
            var $t = this;

            if(!$t.template) {
                $t.template = TemplateModelFactory.getInstance();
            }

            return $t.template;
        },
        scrollTo: function(id, duration) {
            $('body,html').animate({
                'scrollTop': $('#' + id).offset().top
            }, duration);
        }
    });
});