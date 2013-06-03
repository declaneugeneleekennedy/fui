define(['jquery', 'models/ContentAttributeModel'],
function($, ContentAttributeModel) {
    return ContentAttributeModel.extend({
        defaults: $.extend(ContentAttributeModel.prototype.defaults, {
            question: '',
            questionIcon: '',
            responseType: 0,
            output: 0,
            options: []
        })
    });
});