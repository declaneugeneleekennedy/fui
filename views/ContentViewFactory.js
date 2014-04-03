/**
 *
 * Content Types
 *
 * See: https://brighton.atlassian.net/wiki/display/FMB/FormBanc+Form+JSON+Structure#FormBancFormJSONStructure-Content
 *
 * 1 = CONTENT_TYPE_SINGLE_LINE_INPUT_BOX
 * 2 = CONTENT_TYPE_MULTIPLE_CHOICE
 * 3 = CONTENT_TYPE_MULTILINE_INPUT_BOX
 * 4 = CONTENT_TYPE_DESCRIPTIVE_TEXT
 * 5 = CONTENT_TYPE_IDENTITY_VERIFICATION
 * 6 = CONTENT_TYPE_CONTENT_REVIEW
 *
 * Classes need to be added to the define dependency array to be available
 */

define([
    'views/Content/SingleLineInputBoxView',
    'views/Content/MultipleChoiceView',
    'views/Content/MultilineInputBoxView',
    'views/Content/DescriptiveTextView',
    'views/Content/IdentityVerificationView',
    'views/Content/ContentReviewView',
    'views/Content/AddressView'
],
function(SingleLineInputBoxView, MultipleChoiceView, MultilineInputBoxView,
    DescriptiveTextView, IdentityVerificationView, ContentReviewView,
    AddressView
) {
    var views = {
        1: SingleLineInputBoxView,
        2: MultipleChoiceView,
        3: MultilineInputBoxView,
        4: DescriptiveTextView,
        5: IdentityVerificationView,
        6: ContentReviewView,
        7: AddressView
    };

    return {
        getInstance: function(model) {
            var contentTypeId = model.get('contentTypeId');
            if(views[contentTypeId]) {
                return new views[contentTypeId]({
                    model: model
                });
            }

            throw 'Unknown view type: "' + contentTypeId + '"';
        }
    };
});
