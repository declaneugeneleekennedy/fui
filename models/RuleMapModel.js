define(['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        idAttribute: 'triggerContentId',
        defaults: {
            type: null,
            triggerContentId: null,
            rules: []
        }
    });
});