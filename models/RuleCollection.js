define(
['backbone', 'models/RuleModel'],
function(Backbone, RuleModel) {
    return Backbone.Collection.extend({
        model: RuleModel
    });
});