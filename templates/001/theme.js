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
            light: {
                1: {
                    "default": "#666666",
                    "alternative": "#f4f4f4"
                },
                2: {
                    "default": "#ffffff"
                },
                3: {
                    "default": "#a9c93a",
                    "alternative": "0.6"
                },
                4: {
                    "default": "#ff4200",
                    "alternative": "0.1"
                },
                5: {
                    "default": "#682a6a"
                },
                6: {
                    "default": "#999999",
                    "alternative": "0.2"
                }
            },
            dark: {
                1: {
                    "default": "#4e4e4e",
                    "alternative": "#333"
                },
                2: {
                    "default": "#dadada"
                },
                3: {
                    "default": "#6e8326",
                    "alternative": "0.6"
                },
                4: {
                    "default": "#b32e00",
                    "alternative": "0.1"
                },
                5: {
                    "default": "#682a6a"
                },
                6: {
                    "default": "#999999",
                    "alternative": "0.2"
                }                
            }
        },
        stylesheets: {
            'static':   ['css/selectboxit/selectboxit.css', 'css/default.css'],
            'dynamic':  ['css/Dynamic/main.css']
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
                colour:                 $t.template.get('colour'),
                globalColours:          $t.globalColours
            };
        },
        afterRender: function() {
            var $t = this;

            // ensures that these rules override everything before them
            $t.styler.addStylesheet(
                $t.template.getFileUrl('css/responsive.css'));

            var masks = {
                7: 'dd/mm/yyyy',
                9: '+61 (09) 9999 9999',
                10: '+61 (499) 999 999'
            };

            _.each(masks, function(mask, inputFormatId) {
                $('input[data-input-format="' + inputFormatId + '"]').inputmask(mask);
            });

            $('input[data-input-format="7"]').datepicker({
                dateFormat: 'dd/mm/yyyy',
                onSelect: function() {
                    $(this).trigger('blur');
                },
                changeMonth: true,
                changeYear: true,
                yearRange: '1900:' + (new Date().getFullYear()),
                maxDate: '0'
            });

            // selectboxit
            $('.multipleChoice select').selectBoxIt({
                downArrowIcon: 'selectboxitArrow'
            });
        }
    });
});