define(['backbone', 'models/SectionModel'],
function(Backbone, SectionModel) {
    return Backbone.Collection.extend({
        model: SectionModel
    });
});