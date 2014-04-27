define(['underscore', 'models/ContentModel', 'models/ContentCollection',
    'models/Content/SingleLineInputBoxModel', 'enums/InputFormatEnum',
    'enums/ContentTypeEnum'],
function(_, ContentModel, ContentCollection,
    SingleLineInputBoxModel, InputFormatEnum,
    ContentTypeEnum) {
    return ContentModel.extend({
        defaults: _.defaults({
            partsDefault: [
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'unitNumber',
                    'question': 'Unit Number',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_NUMBERS_ONLY
                },
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'streetNumber',
                    'question': 'Street Number',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_NUMBERS_ONLY
                },
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'streetName',
                    'question': 'Street Name',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_LETTERS_ONLY
                },
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'streetType',
                    'question': 'Street Type',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_LETTERS_ONLY
                },
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'suburb',
                    'question': 'Suburb',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_LETTERS_ONLY
                },
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'state',
                    'question': 'State',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_LETTERS_ONLY,
                    'inputMinLength': 2,
                    'inputMaxLength': 3
                },
                {
                    'contentTypeId': ContentTypeEnum.CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                    'contentId': 'postcode',
                    'question': 'Postcode',
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_NUMBERS_ONLY,
                    'inputMinLength': 3,
                    'inputMaxLength': 4
                }
            ],
            displayParts: false

        }, ContentModel.prototype.defaults),
        
        setExtendedAttributes: function() {
            var $t = this;

            $t.set('main', new SingleLineInputBoxModel({
                'contentId':        $t.get('contentId'),
                'question':         $t.get('question'),
                'suggestedInput':   $t.get('suggestedInput'),
                'required':         $t.get('required'),
                'inputFormatId':    InputFormatEnum.INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS
            }));

            var parts = new ContentCollection;

            _.each($t.get('partsDefault'), function(attributes) {
                attributes.contentId        = $t.get('contentId') + attributes.contentId;
                attributes.suggestedInput   = attributes.question;

                parts.add(new SingleLineInputBoxModel(attributes));
            });

            $t.set('parts', parts);
        },

        validateValue: function(value, form) {
            
        }

    });
});