define(['backbone', 'models/RuleMapModel'],
function(Backbone, RuleMapModel) {
    return Backbone.Collection.extend({
        model: RuleMapModel,
        addRuleMap: function(triggerContentId, entity) {
            var $t = this;

            var model = $t.findWhere({
                triggerContentId: triggerContentId
            });

            if(model) {
                model.get('entities').push(entity);
            } else {
                $t.add(new RuleMapModel({
                    triggerContentId: triggerContentId,
                    entities: [entity]
                }));
            }
        }
    });
});