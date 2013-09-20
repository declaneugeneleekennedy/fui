define(['underscore', 'models/ContentModel'],
function(_, ContentModel) {
    return ContentModel.extend({
        defaults: _.defaults({

        }, ContentModel.prototype.defaults)
    });
});