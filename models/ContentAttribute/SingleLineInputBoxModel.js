define(['jquery', 'models/ContentAttributeModel'],
function($, ContentAttributeModel) {
    return ContentAttributeModel.extend({
        defaults: $.extend(ContentAttributeModel.prototype.defaults, {
            question: '',
            questionIcon: '',
            suggestedInput: '',
            confirmationLabel: '',
            inputFormatId: '',
            inputMinLength: 0,
            inputMaxLength: 0,
            inputMinDate: 0,
            inputMaxDate: 0,
            inputPasswordLevel: '',
            inputPasswordMustDifferentFrom: ''
        })
    });
});