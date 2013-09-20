define(['js/theme'],
function(Theme) {
    return Theme.extend({
        globalColours: {
            1: {
                'default': '#666666',
                'alternative': '#f4f4f4'
            },
            2: '#ffffff',
            3: {
                'default': '#a9c93a',
                'alternative': '0.6'
            },
            4: {
                'default': '#ff4200',
                'alternative': '0.1'
            },
            5: '#682a6a',
            6: {
                'default': '#999999',
                'alternative': '0.2'
            }
        },
        applyTheme: function() {
            var $t = this;

            $t.addDependency(
                $t.styler.addDynamicCss(
                    $t.template.getFileUrl('css/Dynamic/main.css'), $t.template.toJSON()));

            $t.styler.addStylesheet($t.template.getFileUrl('css/default.css'));

            $t.styler.addCss('#headerContainer', {
                'background-color': $t.template.getColour('headerBackground'),
                'background-image': 'url(' + $t.template.getSettingUrl('headerImage') + ')'
            });

            $t.styler.addCss('#headerContainer h1', {
                'background-image': 'url(' + $t.template.getSettingUrl('formTitleImage') + ')'
            });

            var rounded = [
                '.rounded',
                '.container',
                '.section h3',
                '.contentElement .input .errors',
                '.contentElement .multipleChoice .input .options'
            ];

            $t.styler.addCss(rounded.join(','), {
                '-webkit-border-radius': $t.template.get('radius'),
                '-moz-border-radius': $t.template.get('radius'),
                'border-radius': $t.template.get('radius')
            });

            var sprites = [
                '.sprite',
                '.section h3:before',
                '.required label.question span.text:before',
                '.contentElement .singleLineInputBox .input span.element:before',
                '.contentElement .singleLineInputBox .input span.element:after',
                '.contentElement .multipleChoice .input label.option input+span.text:before',
                '.valid .multipleChoice .input:after',
                '.invalid .multipleChoice .input:after',
                '.buttons .next:after',
                '.buttons .previous:before'
            ];

            $t.styler.addCss(sprites.join(','), {
                'background-image': 'url(' + $t.template.getSettingUrl('sprite') + ')'
            });
        }
    });
});