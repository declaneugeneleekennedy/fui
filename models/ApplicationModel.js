define(['backbone', 'models/ApplicationValueCollection'],
function(Backbone, ApplicationValueCollection) {
    return Backbone.Model.extend({
        urlRoot: dataHost + '/application',
        idAttribute: 'applicationToken',
        defaults: {
            email:  null,       
            values: null
        },
        initialize: function() {
            var $t = this;

            $t.set('values', new ApplicationValueCollection($t.get('values')));
        },
        parse: function(result) {
            return {
                applicationToken: result.applicationToken,
                values: new ApplicationValueCollection(result.values)
            };
        }
    });
});