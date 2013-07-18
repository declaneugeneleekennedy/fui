define(['underscore', 'models/ContentModel'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            changeEvent: null,
            text: '',
            enableScroll: true
        }, ContentModel.prototype.defaults)
    });
});