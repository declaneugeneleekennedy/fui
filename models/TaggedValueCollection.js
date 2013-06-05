define(['backbone', 'models/TaggedValueModel'], 
function(Backbone, TaggedValueModel) {
    return Backbone.Collection.extend({
        model: TaggedValueModel
    });
});