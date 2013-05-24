define(
['vpl/collection'],
function(VplCollection) {
    return VplCollection.extend({
        dataSource: 'form',
        parse: function(result, args) {
            return result.form.pages;
        }
    });
});