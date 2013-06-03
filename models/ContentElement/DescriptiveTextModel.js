define(['models/ContentElementModel', 'text!templates/element/DescriptiveText.html'],
function(ContentElementModel, Template) {
    return ContentElementModel.extend({
        initialize: function() {
            var $t = this;

            $t.set('template', Template);
        }
    });
});