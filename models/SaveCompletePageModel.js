define(['models/PageModel', 'enums/ContentTypeEnum'],
function(PageModel, ContentTypeEnum) {
    return PageModel.extend({
        defaults: {
            pageUrl: 'save-complete',
            pageTitle: 'Save Completed',
            valid: true,
            sections: [{
                contents: [{
                    contentTypeId:  ContentTypeEnum.CONTENT_TYPE_DESCRIPTIVE_TEXT,
                    text: '<p>This page is shown after sending an email containing a link used to resume the form.</p>'
                }]
            }]
        }
    });
});