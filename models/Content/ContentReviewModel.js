define(['underscore', 'global', 'models/ContentModel', 'models/ContentCollection'],
function(_, Global, ContentModel, ContentCollection) {
    return ContentModel.extend({
        defaults: _.defaults({
            contents: []
        }, ContentModel.prototype.defaults)
    });
});