define(['models/ContentElementModel', 'text!templates/element/MultipleChoice.html'],
function(ContentElementModel, Template) {
    return ContentElementModel.extend({
        defaults: {
            changeEvent: 'change'
        },
        initialize: function() {
            var $t = this;

            $t.set('template', Template);
        }
    });
});