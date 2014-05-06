define(['jquery', 'underscore', 'js/theme',
    'templates/001/js/html5',
    'templates/001/js/jquery/inputmask',
    'templates/001/js/jquery/inputmask-ext',
    'templates/001/js/jquery/inputmask-ext-date',
    'templates/001/js/jquery/inputmask-ext-numeric',
    'templates/001/js/jquery/selectboxit'],
function($, _, Theme) {
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
        stylesheets: {
            'static': ['css/default.css', 'css/selectboxit.css'],
            'dynamic': ['css/Dynamic/main.css']
        },
        getCssVars: function() {
            var $t = this;

            return {
                fontFamily:             $t.template.get('fontFamily'),
                fontSize:               $t.template.get('fontSize') + 1,
                headingsFontFamily:     $t.template.get('headingsFontFamily'),
                headerBackgroundColour: $t.template.getColour('headerBackground'),
                bodyText:               $t.template.getColour('bodyText'),
                bodyBackground:         $t.template.getColour('bodyBackground'),
                headerImage:            $t.template.getSettingUrl('headerImage'),
                formTitleImage:         $t.template.getSettingUrl('formTitleImage'),
                radius:                 $t.template.get('radius'),
                sprite:                 $t.template.getSettingUrl('sprite'),
                hColour:                $t.template.getColour(1).get('default'),
                h2Colour:               ($t.template.getColour('override')) ?
                    $t.template.getColour('override') : $t.template.getColour(0).get('default'),
                colour:                $t.template.get('colour')
            };
        },
        afterRender: function() {
            var $t = this;

            var masks = {
                7: 'dd/mm/yyyy',
                9: '+61 (09) 9999 9999',
                10: '+61 (499) 999 999'
            };

            _.each(masks, function(mask, inputFormatId) {
                $('input[data-input-format="' + inputFormatId + '"]').inputmask(mask);
            });

            $('.input.vertical select').selectBoxIt({
                downArrowIcon: 'selectboxitArrow'
            });
        }
    });
});