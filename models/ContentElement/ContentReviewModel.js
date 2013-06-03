define(['models/ContentElementModel', 'text!templates/element/ContentReview.html'],
function(ContentElementModel, Template) {
    return ContentElementModel.extend({
        initialize: function() {
            var $t = this;

            $t.set('template', Template);
        }
    });
});