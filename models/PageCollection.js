define(
['vpl/collection'],
function(VplCollection) {
    return VplCollection.extend({
        model: 'models/PageModel',
        dataSource: 'form',
        parse: function(result, args) {
            return result.form.pages;
        }
    });
});