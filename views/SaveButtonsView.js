define(['jquery', 'views/ButtonsView'],
function($, ButtonsView) {
    return ButtonsView.extend({        
        events: {
            'click .next button': 'saveForm',
            'click .previous button': 'cancelSave'
        },
        getButtons: function() {
            var $t = this, buttons = [];

            buttons.push($t.getButton('previous', 'Cancel'));
            buttons.push($t.getButton('next', 'Save'));

            return buttons;
        },
        cancelSave: function(e) {
            var $t = this;

            e.preventDefault();

            window.history.back();
        }
    });
});