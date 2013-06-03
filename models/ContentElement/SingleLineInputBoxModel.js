define(['models/ContentElementModel', 'text!templates/element/SingleLineInputBox.html'],
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