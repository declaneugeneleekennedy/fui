define(['underscore', 'models/ContentModel'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            text: '',
            enableScroll: true
        }, ContentModel.prototype.defaults)
    });
});