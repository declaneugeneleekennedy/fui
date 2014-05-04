define(['backbone', 'models/ApplicationValueModel'],
function(Backbone, ApplicationValueModel) {
    return Backbone.Collection.extend({
        model: ApplicationValueModel
    });
});