define(['underscore', 'models/ContentModel'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({}, ContentModel.prototype.extend)
    });
});