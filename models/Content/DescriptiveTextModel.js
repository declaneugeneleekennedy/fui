define(['underscore', 'models/ContentModel', 'text!templates/element/DescriptiveText.html'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            changeEvent: null,
            template: Template,
            text: '',
            enableScroll: true
        }, ContentModel.prototype.defaults)
    });
});