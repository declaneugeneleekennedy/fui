define(['backbone', 'models/RuleMapModel'],
function(Backbone, RuleMapModel) {
    return Backbone.Collection.extend({
        model: RuleMapModel,
        addRuleMap: function(triggerContentId, model) {
            var $t = this;

            var rule = $t.findWhere({
                triggerContentId: triggerContentId
            });

            if(rule) {
                rule.get('models').push(model);
            } else {
                $t.add(new RuleMapModel({
                    triggerContentId: triggerContentId,
                    models: [model]
                }));
            }
        }
    });
});