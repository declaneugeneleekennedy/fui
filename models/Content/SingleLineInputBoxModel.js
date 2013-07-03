/**

Input formats, see: https://brighton.atlassian.net/wiki/display/FMB/FormBanc+Form+JSON+Structure#FormBancFormJSONStructure-ContentAttribute(SingleLineInputBox)

1 = INPUT_FORMAT_LETTERS_ONLY
2 = INPUT_FORMAT_NUMBERS_ONLY
3 = INPUT_FORMAT_LETTERS_AND_NUMBERS
4 = INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS
5 = INPUT_FORMAT_PERCENTAGE
6 = INPUT_FORMAT_EMAIL
7 = INPUT_FORMAT_DATE
8 = INPUT_FORMAT_PASSWORD
9 = INPUT_FORMAT_LANDLINE_PHONE
10 = INPUT_FORMAT_MOBILE_PHONE
11 = INPUT_FORMAT_INTERNATIONAL_PHONE
12 = INPUT_FORMAT_TFN
13 = INPUT_FORMAT_ABN
14 = INPUT_FORMAT_ADDRESS
*/
define(['jquery', 'underscore', 'models/ContentModel', 'text!templates/element/SingleLineInputBox.html'],
function($, _, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            template: Template,
            question: '',
            questionIcon: '',
            suggestedInput: '',
            confirmationLabel: '',
            confirmationValue: '',
            inputFormatId: 0,
            inputMinLength: -1,
            inputMaxLength: -1,
            inputMinDate: -1,
            inputMaxDate: -1,
            inputPasswordLevel: null,
            inputPasswordMustDifferentFrom: [],
            inputType: 'text'
        }, ContentModel.prototype.defaults),
        setExtendedAttributes: function(contentAttributes) {
            var $t = this;

            $t.set('inputType', $t.getInputType($t.get('inputFormatId')));
        },
        bindChanges: function(contentElement) {
            var $t = this;

            $('[name="' + $t.get('name') + '"]', contentElement).on('blur', function() {
                $t.set('value', $(this).val());
            });

            if($t.get('confirmationLabel')) {

                 // force revalidation after confirmation input blur
                $('[name="' + $t.get('name') + 'Confirmation"]', contentElement).on('blur', function() {
                    $t.set('confirmationValue', $(this).val());
                    $t.trigger('change:value');
                })
            }
        },
        getInputType: function(id) {
            var $t = this;

            switch(id) {
                case 7:
                    return 'date';
                    break;
                case 8:
                    return 'password';
                    break;
                default:
                    return 'text';
                    break;
            }
        },
        validateValue: function(value, form) {
            var $t = this;

            $t.checkLength(value);

            if($t.get('confirmationLabel')) {
                $t.checkConfirmation(value);
            }

            $t.checkFormat(value);
        },
        checkLength: function(value) {
            var $t = this;

            var min = $t.get('inputMinLength'), max = $t.get('inputMaxLength');

            if(min != -1 && value.length < min) {
                $t.addError('Must be at least ' + min + ' characters');
            }

            if(max != -1 && value.length > max) {
                $t.addError('Must not exceed ' + max + ' characters');
            }
        },
        checkConfirmation: function(value) {
            var $t = this;

            if($t.get('confirmationValue') != value) {
                console.log(value, 'Main Value');
                console.log($t.get('confirmation'), 'Confirmation Value');
                $t.addError('Values must match');
            }
        },
        checkFormat: function(value) {
            var $t = this;

            value = $t.trim(value);

            switch($t.get('inputFormatId')) {
                case 1:     // INPUT_FORMAT_LETTERS_ONLY
                    if(!/^[a-z]+$/i.test($t.trim(value))) {
                        $t.addError('Only letters are allowed');
                    };
                    break;
                case 2:     // INPUT_FORMAT_NUMBERS_ONLY
                    if(!/^[0-9]+$/i.test(value)) {
                        $t.addError('Only numbers are allowed');
                    }
                    break;
                case 3:     // INPUT_FORMAT_LETTERS_AND_NUMBERS
                    if(!/^[a-z0-9]+$/i.test(value)) {
                        $t.addError('Only letters and numbers are allowed');
                    };
                    break;
                case 4:     // INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS
                    if(!/^[\x00-\x7F]+$/.test(value)) {
                        $t.addError('Only letters, numbers and symbols are allowed');
                    };
                    break;
                case 5:     // INPUT_FORMAT_PERCENTAGE
                    if(!/^[0-9]+%$/.test(value)) {
                        $t.addError('Must be in the format 0%');
                    };
                    break;
                case 6:     // INPUT_FORMAT_EMAIL
                    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        $t.addError('Not a valid email address');
                    };
                    break;
                case 7:     // INPUT_FORMAT_DATE
                    var min = new Date($t.get('inputMinDate')),
                        max = new Date($t.get('inputMaxDate'));

                    var current;

                    try {
                        current = new Date(value);
                    } catch(error) {
                        $t.addError(error); // @todo [dk] - may be ugly
                    }

                    if(current) {
                         if(current < min) {
                            $t.addError('Date must be after ' + $t.get('inputMinDate'));
                         }

                         if(current > max) {
                            $t.addError('Date must be before ' + $t.get('inputMaxDate'));
                         }
                    }
                    break;
                case 8:     // INPUT_FORMAT_PASSWORD
                    // @todo [dk] - check password strength

                    var compare;
                    _.each($t.get('inputPasswordMustDifferentFrom'), function(contentId) {
                        compare = form.getContents().findWhere({
                            contentId: contentId
                        });

                        if(compare && compare.get('value')) {
                            if(compare.get('value') == value) {
                                // @todo [dk] - putting the question here doesn't make sense but what else can be used?
                                $t.addError('Password must differ from "' + compare.get('question') + '"');
                            }
                        }
                    });
                    break;
                case 9:     // INPUT_FORMAT_LANDLINE_PHONE
                    if(!/^(\+61)*(\s)*(\()*([0-9]{2})*(\))*(\s)*[0-9]{4}(\s)*[0-9]{4}$/.test(value)) {
                        $t.addError('Not a valid phone number');
                    }
                    break;
                case 10:    // INPUT_FORMAT_MOBILE_PHONE
                    if(!/^0[0-9]{3}(\s)*[0-9]{3}(\s)*[0-9]{3}$/.test(value)) {
                        $t.addError('Not a valid mobile phone number');
                    }
                    break;
                case 11:    // INPUT_FORMAT_INTERNATIONAL_PHONE
                    if(!/^[0-9]{8,15}$/.test(value.replace(/[\s()+\-\.]|ext/gi, ''))) {
                        $t.addError('Not a valid international phone number');
                    }
                    break;
                case 12:    // INPUT_FORMAT_TFN
                    value = $t.stripSpace(value);

                    var valid = true, weights = [1, 4, 3, 7, 5, 8, 6, 9, 10], total = 0, digit;

                    for (i = 0; i < 9 ; i++) {
                        total += weights[i] * value.charAt(i);

                        if (total == 0 || total % 11 != 0) {
                            valid = false;
                        }
                    }

                    if(!valid) {
                        $t.addError('Not a valid Tax File Number');
                    }                        
                    break;
                case 13:    // INPUT_FORMAT_ABN
                    value = $t.stripSpace(value);
                    var valid = true, weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], total = 0;

                    for (i = 0; i<11 ; i++) {
                        total += weights[i] * value.charAt(i);
                    }

                    if (total == 0 || total % 89 != 0) {
                        $t.addError('Not a valid ABN');
                    }
                    break;
                case 14:    // INPUT_FORMAT_ADDRESS
                    // @todo [dk] - shit is cray
                    break;
            }
        },
        trim: function(value) {
            if(!String.prototype.trim) {
                return value.replace(/^\s+|\s+$/g,'');
            }

            return value.trim();
        },
        stripSpace: function(value) {
            return value.replace(/\s/, '');
        }
    });
});
