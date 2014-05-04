define(['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            contentId: null,
            value: null
        }
    });
});