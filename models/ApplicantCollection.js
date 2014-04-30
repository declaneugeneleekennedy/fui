define(['backbone', 'models/ApplicantModel'],
function(Backbone, ApplicantModel) {
    return Backbone.Collection.extend({
        model: ApplicantModel
    });
});