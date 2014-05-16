define(['underscore', 'models/ContentModel', 'models/ContentCollection'],
function(_, ContentModel, ContentCollection) {
    return ContentModel.extend({
        defaults: _.defaults({
            contents: []
        }, ContentModel.prototype.defaults)
    });
});