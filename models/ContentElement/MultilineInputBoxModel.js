define(['models/ContentElementModel', 'text!templates/element/MultilineInputBox.html'],
function(ContentElementModel, Template) {
    return ContentElementModel.extend({
        defaults: {
            changeEvent: 'blur'
        },
        initialize: function() {
            var $t = this;

            $t.set('template', Template);
        }
    });
});