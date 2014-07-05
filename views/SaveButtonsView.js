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
        },
        saveForm: function(e) {
            var $t = this;

            e.preventDefault();

            var $c = $t.model.get('savePage').get('sections').at(0).get('contents').findWhere({
                contentId: 'saveEmail'
            });

            if($c) {
                $t.model.get('application').set('email', $c.get('value'));

                $.when($t.model.submit()).then(function() {
                    console.log('Resume URL: %s', (
                        'http://' + window.location.hostname
                        + '/#' + $t.model.get('formUrl')
                        + '/' + $t.model.get('resumeFormUrl')
                        + '/' + $t.model.get('application').get('applicationToken')
                    ));
                    
                    $t.model.set('currentPage', $t.model.get('saveCompletePage'));
                });
            }
        }
    });
});