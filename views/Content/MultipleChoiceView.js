define(['jquery', 'underscore', 'views/ContentView',
    'enums/ResponseTypeEnum', 'enums/OutputStyleEnum'],
function($, _, ContentView, ResponseTypeEnum, OutputStyleEnum) {
    return ContentView.extend({
        templateUrl: 'html/Content/MultipleChoice.html',
        events: {
            'click input': 'setValue',
            'change': 'setValue'
        },
        setValue: function(e) {
            var $t = this;

            var value = $t.getValue();

            if(value != $t.model.get('value')) {
                $t.model.set('value', value);
            }
        },
        getValue: function() {
            var $t = this;

            var isSingle = ($t.model.get('responseType') ==
                ResponseTypeEnum.RESPONSE_TYPE_SINGLE);

            var selector, test;
            if($t.model.get('output') == OutputStyleEnum.OUTPUT_STYLE_VERTICAL) {
                selector    = 'select[name="' + $t.model.get('name') + '"] option';
                test        = ':selected';
                
            } else {
                selector    = 'input[name="' + $t.model.get('name') + '"]';
                test        = ':checked';
            }

            return $t.getInputValue(isSingle, selector, test);
        },
        getInputValue: function(isSingle, selector, test) {
            var $t = this;

            var value = (isSingle) ? null : [];

            $(selector, $t.$el).each(function() {                
                if($(this).is(test)) {
                    if(isSingle) {
                        value = $(this).val();
                    } else {
                        value.push($(this).val());
                    }
                }
            });

            return value;
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
                console.log($t.model.get('value'));
                if(_.isArray($t.model.get('value'))) {
                    option.checked =
                        (_.indexOf($t.model.get('value'), option.value) != -1);
                } else {
                    option.checked = option.value == $t.model.get('value');    
                }

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