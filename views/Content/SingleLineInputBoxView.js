define(['jquery', 'views/ContentView', 'enums/InputFormatEnum'],
function($, ContentView, InputFormatEnum) {
    return ContentView.extend({
        templateUrl: 'html/Content/SingleLineInputBox.html',
        events: {
            'blur input': 'setValue'
        },

        afterRender: function() {
            var $t = this;

            if($t.model.get('inputFormatId') == InputFormatEnum.INPUT_FORMAT_DATE) {
                $('input[name="' + $t.model.get('name') + '"]', $t.$el).on('focus', function() {
                    $(this).datepicker();
                });
            }

            if($t.model.get('confirmationLabel')) {
                var conf = $t.model.get('name') + 'Confirmation';
                $('input[name="' + conf + '"]').on('blur', function() {
                    $t.model.set('confirmationValue', $('input[name="' + conf + '"]').val());
                    $t.model.trigger('change:value');
                });
            }
        },

        setValue: function(e) {
            var $t = this;

            var value = $('input[name="' + $t.model.get('name') + '"]', $t.$el).val();

            if(value != $t.model.get('value')) {
                $t.model.set('value', value);
            }
        }
    });
});