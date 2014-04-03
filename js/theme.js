define(['backbone', 'underscore', 'js/extendable', 'js/styler',
    'models/MultiColourModel', 'enums/ThemeEnum'],
function(Backbone, _, Extendable, Styler, MultiColourModel, ThemeEnum) {
    return Extendable.extend({
        styler: null,
        template: null,
        dependencies: [],
        initialize: function() {
            var $t = this;

            $t.styler = new Styler({ id: 'theme' });

            if($t.globalColours) {
                var globalColours = [];

                _.each($t.globalColours, function(value, id) {
                    globalColours.push($t.initializeColour(value, id));
                });

                $t.globalColours = new Backbone.Collection(globalColours);
            }
            
            $t.applyTheme();
        },
        initializeColour: function(value, id) {
            var $t = this;

            if(_.isString(value)) {
                value = {
                    'default': value
                };
            } else {
                if(value.alternative.charAt(0) != '#') {
                    value.alternative = $t.generateAlternative(value);
                }
            }

            value.id = id;

            return new MultiColourModel(value);
        },
        generateAlternative: function(obj) {
            var $t = this;

            return $t.convertHexOpacity(obj['default'], obj['alternative']);
        },
        convertHexOpacity: function(hex, alpha) {
            var $t = this;

            if(hex.charAt(0) == '#') {
                hex = hex.substr(1);
            }

            alpha = parseFloat(alpha);

            var base = ($t.template.get('theme') == ThemeEnum.GLOBAL_COLOUR_LIGHT) ? 255 : 0;

            var result = '#', converted = '';

            for(var i = 0; i < 6; i = i + 2) {
                converted = Math.round(
                    (parseInt(hex.substr(i, 2), 16) * alpha)
                        +
                    (base * (1 - alpha))
                ).toString(16);

                result = result + String(converted + converted).slice(-2);
            }

            return result;
        },
        applyTheme: function() {
            console.log('Calling Theme.applyTheme() no-op');
        },
        addDependency: function(dependency) {
            var $t = this;

            $t.dependencies.push(dependency);
        },
        getDependencies: function() {
            var $t = this;

            return $t.dependencies;
        }
    });
});