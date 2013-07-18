define(['jquery', 'underscore', 'views/ContentView'],
function($, _, ContentView) {
    return ContentView.extend({
        templateUrl: 'Content/MultipleChoice.html',
        events: {
            'click input': 'setValue'
        },
        setValue: function(e) {
            var $t = this;

            var single = ($t.model.get('responseType') == 'single');

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
        prepare: function() {
            var $t = this;

            _.each($t.model.get('options'), function(option) {
                option.checked = (option.value == $t.model.get('value'));
                option.iconUrl = $t.template.getFileUrl(option.optionIcon);
            });
        }
    });
});