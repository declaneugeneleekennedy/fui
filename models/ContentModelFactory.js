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
 * 7 = CONTENT_TYPE_ADDRESS
 *
 * Classes need to be added to the define dependency array to be available
 */

define(
[
    'enums/ContentTypeEnum',
    'models/Content/SingleLineInputBoxModel',
    'models/Content/MultipleChoiceModel',
    'models/Content/MultilineInputBoxModel',
    'models/Content/DescriptiveTextModel',
    'models/Content/IdentityVerificationModel',
    'models/Content/ContentReviewModel',
    'models/Content/AddressModel'
],
function(ContentTypeEnum,
    SingleLineInputBoxModel, MultipleChoiceModel, MultilineInputBoxModel,
    DescriptiveTextModel, IdentityVerificationModel, ContentReviewModel,
    AddressModel
) {

    var classes = {};

    classes[ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX] = SingleLineInputBoxModel;
    classes[ContentTypeEnum.CONTENT_TYPE_MULTIPLE_CHOICE]       = MultipleChoiceModel;
    classes[ContentTypeEnum.CONTENT_TYPE_MULTILINE_INPUT_BOX]   = MultilineInputBoxModel;
    classes[ContentTypeEnum.CONTENT_TYPE_DESCRIPTIVE_TEXT]      = DescriptiveTextModel;
    classes[ContentTypeEnum.CONTENT_TYPE_IDENTITY_VERIFICATION] = IdentityVerificationModel;
    classes[ContentTypeEnum.CONTENT_TYPE_CONTENT_REVIEW]        = ContentReviewModel;
    classes[ContentTypeEnum.CONTENT_TYPE_ADDRESS]               = AddressModel;

    return {
        getInstance: function(attributes, options) {
            var contentTypeId = attributes.contentTypeId;

            if(classes[contentTypeId]) {
                return new classes[contentTypeId](attributes, options);
            }

            throw 'Unknown content model type: "' + contentTypeId + '"';
        }
    };
});