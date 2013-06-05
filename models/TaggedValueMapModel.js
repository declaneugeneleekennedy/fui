define(['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        idAttribute: 'triggerContentId',
        defaults: {
            triggerContentId: null,
            models: []
        }
    });
});