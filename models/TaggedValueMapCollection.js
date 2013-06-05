define(['backbone', 'models/TaggedValueMapModel'],
function(Backbone, TaggedValueMapModel) {
    return Backbone.Collection.extend({
        model: TaggedValueMapModel,
        addTaggedValueMap: function(triggerContentId, taggedValue) {
            var $t = this;

            var model = $t.findWhere({triggerContentId: triggerContentId});
            if(model) {
                model.get('models').push(taggedValue);
            } else {
                $t.add({
                    triggerContentId: triggerContentId,
                    models: [taggedValue]
                });
            }
        }
    });
});