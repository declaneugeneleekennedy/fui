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
        stylesheets: {
            'static': ['css/default.css'],
            'dynamic': ['css/Dynamic/main.css']
        },
        getThemeVars: function() {
            var $t = this;

            return {
                fontFamily:             $t.template.get('fontFamily'),
                fontSize:               $t.template.get('fontSize') + 1,
                headingsFontFamily:     $t.template.get('headingsFontFamily'),
                headerBackgroundColour: $t.template.getColour('headerBackground'),
                headerImage:            $t.template.getSettingUrl('headerImage'),
                formTitleImage:         $t.template.getSettingUrl('formTitleImage'),
                radius:                 $t.template.get('radius'),
                sprite:                 $t.template.getSettingUrl('sprite')
            };
        }
    });
});