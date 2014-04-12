define(['jquery', 'underscore', 'views/ContentView',
    'enums/ResponseTypeEnum', 'enums/OutputStyleEnum'],
function($, _, ContentView, ResponseTypeEnum, OutputStyleEnum) {
    return ContentView.extend({
        templateUrl: 'html/Content/MultipleChoice.html',
        events: {
            'click input': 'setValue'
        },
        setValue: function(e) {
            var $t = this;

            var single = ($t.model.get('responseType') ==
                ResponseTypeEnum.RESPONSE_TYPE_SINGLE);

            var value = (single) ? null : [];

            $('input[name="' + $t.model.get('name') + '"]', $t.$el).each(function() {                
                if($(this).is(':checked')) {
                    if(single) {
                        value = $(this).val();
                    } else {
                        value.push($(this).val());
                    }
                }
            });

            if(value != $t.model.get('value')) {
                $t.model.set('value', value);
            }
        },
        beforeLoad: function() {
            var $t = this;

            if($t.model.get('output') == OutputStyleEnum.OUTPUT_STYLE_VERTICAL) {
                $t.templateUrl = 'html/Content/MultipleChoiceVertical.html';
            } else {
                $t.templateUrl = 'html/Content/MultipleChoiceHorizontal.html';
            }

            var hasIcons = $t.hasIcons($t.model.get('options'));

            _.each($t.model.get('options'), function(option) {
                option.checked = (option.value == $t.model.get('value'));

                if(hasIcons) {
                    if(!option.optionIcon) {
                        option.optionIcon = 'img/multiChoice/missingIcon.png';
                    }

                    option.iconUrl = $t.getTemplate().getFileUrl(option.optionIcon);
                }
            });
        },
        hasIcons: function(options) {
            var $t = this;

            var icons = false;
            _.each(options, function(option) {
                if(icons) {
                    return;
                }

                if(option.optionIcon) {
                    icons = true;
                }
            });

            return icons;
        }
    });
});