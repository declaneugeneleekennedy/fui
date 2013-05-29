define(['vpl/collection'],
function(VplCollection) {
    return VplCollection.extend({
        model: 'models/FormModel',
        dataSource: 'form',
        parse: function(result, args) {
            var formId  = args.formId || null;
            var forms   = [];

            forms.push(result.form);

            return forms;
        }
    });
});