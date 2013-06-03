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

define(
[
    'models/ContentElement/SingleLineInputBoxModel',
    'models/ContentElement/MultipleChoiceModel',
    'models/ContentElement/MultilineInputBoxModel',
    'models/ContentElement/DescriptiveTextModel',
    'models/ContentElement/IdentityVerificationModel',
    'models/ContentElement/ContentReviewModel'
],
function(SingleLineInputBoxModel, MultipleChoiceModel, MultilineInputBoxModel,
    DescriptiveTextModel, IdentityVerificationModel, ContentReviewModel
) {
    var classes = {
        1: SingleLineInputBoxModel,
        2: MultipleChoiceModel,
        3: MultilineInputBoxModel,
        4: DescriptiveTextModel,
        5: IdentityVerificationModel,
        6: ContentReviewModel
    };

    return {
        getClasses: function() {
            return classes;
        },
        getInstance: function(typeId, attributes, options) {
            if(classes[typeId]) {
                return new classes[typeId](attributes, options);
            }

            throw 'Unknown Content Element Model type: "' + typeId + '"';
        }
    };
});