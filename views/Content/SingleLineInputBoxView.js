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
                $('input[name="' + $t.model.get('name') + '"]', $t.$el)
                    .datepicker({
                        showOn: 'focus'
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