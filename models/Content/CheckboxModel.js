define(['underscore', 'models/ContentModel'],
function(_, ContentModel) {
    return ContentModel.extend({
        defaults: _.defaults({
            onValue: 1
        }, ContentModel.prototype.defaults)
    });
});