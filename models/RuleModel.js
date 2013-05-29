define(['vpl/model'],
function(VplModel) {
    return VplModel.extend({
        defaults: {
            triggerContentId: null,
            operator: '=',
            value: null
        }
    });
});