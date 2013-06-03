define(['models/ContentElementModel', 'text!templates/element/IdentityVerification.html'],
function(ContentElementModel, Template) {
    return ContentElementModel.extend({
        initialize: function() {
            var $t = this;

            $t.set('template', Template);
        }
    });
});