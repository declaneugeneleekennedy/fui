define(['jquery', 'underscore', 'global', 'backbone'],
function($, _, Global, Backbone) {
    return Backbone.View.extend({
        templateUrl: null,
        html: null,
        initialize: function() {
            var $t = this;

            if($t.stylesheets) {
                _.each($t.stylesheets, function(url) {
                    $t.addStylesheet(url);
                });
            }

            if($t.css) {
                _.each($t.css, function(rules, selector) {
                    $t.addCss(selector, rules);
                });
            }

            $t.template = Global.get('template');

            var $p = $t.template.getHtmlFile($t.templateUrl);

            $.when($p).then(function(html) {
                $t.html = _.template(html);
                $t.render();
            });
        },
        setTitle: function(title) {
            document.title = title;
        },
        addStylesheet: function(url) {
            if($('head link[href="' + url + '"]').length == 0) {
                $('head').append($(document.createElement('link')).attr({
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: url
                }));
            }
        },
        addCss: function(selector, rules) {
            var $t = this;

            $t.addRawCss($t.getCssText(selector, rules));
        },
        addRawCss: function(text) {
            var $t = this;

            if(Global.get('style') == null) {
                Global.set('style', $(document.createElement('style')).attr({
                    id: 'dynamic',
                    type: 'text/css'
                }));

                $('head').append(Global.get('style'));
            }

            Global.get('style').text(Global.get('style').text() + text);
        },
        getCssText: function(selector, rules) {
            var $t = this;

            var css = selector + '{' + $t.flattenRules(rules) + '}';

            return css;
        },
        flattenRules: function(rules) {
            var $t = this;

            var css = [];

            _.each(rules, function(value, name) {
                css.push(name + ':' + value);
            });

            return css.join(';');
        }
    });
});