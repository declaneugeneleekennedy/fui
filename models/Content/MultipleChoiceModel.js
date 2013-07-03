define(['underscore', 'models/ContentModel', 'text!templates/element/MultipleChoice.html'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            template: Template,
            question: '',
            questionIcon: '',
            responseType: 0,
            output: '',
            options: [],
            inputType: 'radio',
        }, ContentModel.prototype.defaults),
        setExtendedAttributes: function(contentAttributes) {
            var $t = this;

            if($t.get('responseType') == 'single') {
                $t.set('inputType', 'radio');

                if($t.get('value') == ContentModel.prototype.defaults.value) {
                    $t.set('value', $t.get('options')[0].value);
                }
            } else {
                $t.set('inputType', 'checkbox');
            }
        },
        bindChanges: function(contentElement) {
            var $t = this;

            var selector = '[name="' + $t.get('name') + '"]';

            var trigger, handler;

            if($t.get('responseType') == 'single') {
                trigger = 'change';

                handler = function() {
                    $t.set('value', $(this).val());
                }
            } else {
                trigger = 'click';

                handler = function() {
                    var value = [];

                    $(selector, contentElement).each(function() {
                        if($(this).is(':checked')) {
                            value.push($(this).val());
                        }
                    });

                    $t.set('value', value);
                }
            }            

            $(selector, contentElement).on(trigger, handler);
        }
    });
});