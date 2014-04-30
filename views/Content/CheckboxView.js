define(['jquery', 'views/ContentView'],
function($, ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/Checkbox.html',
        events: {
            'mouseup': 'setValue'
        },

        setValue: function() {
            var $t = this;

            var $input = $('input[name="' + $t.model.get('name') + '"]');
            if($input.is(':checked')) {
                $t.model.set('value', $input.value);
            } else {
                $t.model.set('value', null);
            }
        }
    });
});