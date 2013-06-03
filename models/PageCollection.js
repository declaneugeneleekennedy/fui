define(
['backbone', 'models/PageModel'],
function(Backbone, PageModel) {
    return Backbone.Collection.extend({
        model: PageModel
    });
});