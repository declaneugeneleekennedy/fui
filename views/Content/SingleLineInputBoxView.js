define(['jquery', 'views/ContentView'],
function($, ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/SingleLineInputBox.html',
        events: {
            'blur input': 'setValue'
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