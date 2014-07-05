define(['jquery', 'underscore', 'models/ContentModel', 'models/ContentCollection',
    'models/Content/SingleLineInputBoxModel', 'models/Content/CheckboxModel',
    'enums/InputFormatEnum', 'enums/ContentTypeEnum'],
function($, _, ContentModel, ContentCollection,
    SingleLineInputBoxModel, CheckboxModel,
    InputFormatEnum, ContentTypeEnum) {
    return ContentModel.extend({
        defaults: _.defaults({
            lastMatches: [],
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
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS
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
                    'inputFormatId': InputFormatEnum.INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS
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
            ]

        }, ContentModel.prototype.defaults),
        
        setExtendedAttributes: function() {
            var $t = this;

            $t.set('main', new SingleLineInputBoxModel({
                'value':            $t.get('value'),
                'contentId':        $t.get('contentId'),
                'question':         $t.get('question'),
                'suggestedInput':   $t.get('suggestedInput'),
                'required':         $t.get('required'),
                'display':          $t.get('display'),
                'inputFormatId':    InputFormatEnum.INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS
            }));

            $t.get('main').on('change:value', function() {
                $t.set('value', $t.get('main').get('value'));
            });

            var parts = new ContentCollection;

            _.each($t.get('partsDefault'), function(attributes) {
                attributes.contentId        = $t.get('contentId') + attributes.contentId;
                attributes.suggestedInput   = attributes.question;

                parts.add(new SingleLineInputBoxModel(attributes));
            });

            $t.set('parts', parts);

            $t.set('confirm', new CheckboxModel({
                'question': 'Yes, this is the correct address'
            }));

            $t.set('deny', new CheckboxModel({
                'question': 'No',
                'required': true
            }));
        },

        queryAddress: function(term) {
            var $t = this;

            var $p = $.ajax({
                url: "/queryAddress.php?searchText=" + term,
                dataType: "json",
                data: {
                    featureClass: "P",
                    style: "full",
                    maxRows: 12,
                    name_startsWith: term
                }
            });

            $.when($p).then(function(data) {
                $t.set('lastMatches', _.pluck(data.addresses, 'canonical'));
            });

            return $p;
        },

        validateValue: function(value, form) {
            var $t = this;

            if(_.indexOf($t.get('lastMatches'), value) == -1) {
                $t.addError('Address could not be found');
            }
        }
    });
});