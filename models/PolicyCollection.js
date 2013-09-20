define(
['backbone', 'models/PolicyModel'],
function(Backbone, PolicyModel) {
    return Backbone.Collection.extend({
        model: PolicyModel
    });
});