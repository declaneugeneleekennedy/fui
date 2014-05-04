define(['jquery', 'underscore', 'loader', 'js/extendable'],
function($, _, Loader, Extendable) {
    return Extendable.extend({
        loader: new Loader,
        id: null,
        element: null,
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
        addDynamicCss: function(url, variables) {
            var $t = this;

            var $p = $t.loader.load(url, 'text');
            $.when($p).then(function(text) {
                var compiled = _.template(text);

                $t.addRawCss(compiled(variables).replace(/\s+/g, ' '));
            });

            return $p;
        },
        addRawCss: function(text) {
            var $t = this;

            if($t.element == null) {
                if($('head style#' + $t.id).length == 0) {
                    $('head').append($(document.createElement('style')).attr({
                        id: $t.id,
                        type: 'text/css'
                    }));
                }

                $t.element = $('head style#' + $t.id);
            }

            $t.element.text($t.element.text() + text);
        },
        getCssText: function(selector, rules) {
            var $t = this;

            return (selector + '{' + $t.flattenRules(rules) + '}');
        },
        flattenRules: function(rules) {
            var $t = this;

            var css = [];

            _.each(rules, function(value, name) {
                css.push(name + ':' + value);
            });

            return (css.join(';') + ';');
        }
    });
});