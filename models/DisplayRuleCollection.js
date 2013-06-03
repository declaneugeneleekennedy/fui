define(['backbone', 'models/DisplayRuleModel'],
function(Backbone, DisplayRuleModel) {
    return Backbone.Collection.extend({
        model: DisplayRuleModel
    });
});