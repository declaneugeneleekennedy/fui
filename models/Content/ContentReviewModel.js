define(['underscore', 'models/ContentModel', 'models/ContentCollection'],
function(_, ContentModel, ContentCollection) {
    return ContentModel.extend({
        defaults: _.defaults({
            changeEvent: null,
            contents: []
        }, ContentModel.prototype.defaults)
    });
});