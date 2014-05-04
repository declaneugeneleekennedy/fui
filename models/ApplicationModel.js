define(['backbone', 'models/ApplicationValueCollection'],
function(Backbone, ApplicationValueCollection) {
    return Backbone.Model.extend({
        urlRoot: '/save.php',
        idAttribute: 'applicationId',
        defaults: {
            values: null
        },
        initialize: function() {
            var $t = this;

            $t.set('values', new ApplicationValueCollection($t.get('values')));
        },
        parse: function(response) {
            return {
                values:         new ApplicationValueCollection(response.values),
                applicationId:  response.applicationId
            };
        }
    });
});