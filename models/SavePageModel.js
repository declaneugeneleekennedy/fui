define(['models/PageModel', 'enums/ContentTypeEnum', 'enums/InputFormatEnum'],
function(PageModel, ContentTypeEnum, InputFormatEnum) {
    return PageModel.extend({
        defaults: {
            pageUrl: 'complete-later',
            pageTitle: 'Save your application',
            valid: false,
            sections: [{
                contents: [{
                    contentTypeId:  ContentTypeEnum.CONTENT_TYPE_DESCRIPTIVE_TEXT,
                    text:           '<p>Save your application and come back at any time. Do not hesitate to call if you would like some help.</p>'
                },
                {
                    contentId:          'saveEmail',
                    contentTypeId:      ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    inputFormatId:      InputFormatEnum.INPUT_FORMAT_EMAIL,
                    question:           'Your email address',
                    confirmationLabel:  'Confirm your email',
                    suggestedInput:     'e.g. acitizen@email.com',
                    required:           true
                }]
            }],
        }
    });
});