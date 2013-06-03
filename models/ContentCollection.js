define(['backbone', 'models/ContentModel'],
function(Backbone, ContentModel) {
    return Backbone.Collection.extend({
        model: ContentModel
    });
});