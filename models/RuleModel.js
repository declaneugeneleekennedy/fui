define(
['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            triggerContentId: null,
            operator: '=',
            value: null
        }
    });
});