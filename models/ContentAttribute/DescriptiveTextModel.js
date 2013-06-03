define(['jquery', 'models/ContentAttributeModel'],
function($, ContentAttributeModel) {
    return ContentAttributeModel.extend({
        defaults: $.extend(ContentAttributeModel.prototype.defaults, {
            text: '',
            enableScroll: true
        })
    });
});