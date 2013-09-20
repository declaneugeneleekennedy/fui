define(['js/enum'],
function(Enum) {
    return Enum.getInstance('InputFormat', {
        'INPUT_FORMAT_LETTERS_ONLY':                1,
        'INPUT_FORMAT_NUMBERS_ONLY':                2,
        'INPUT_FORMAT_LETTERS_AND_NUMBERS':         3,
        'INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS': 4,
        'INPUT_FORMAT_PERCENTAGE':                  5,
        'INPUT_FORMAT_EMAIL':                       6,
        'INPUT_FORMAT_DATE':                        7,
        'INPUT_FORMAT_PASSWORD':                    8,
        'INPUT_FORMAT_LANDLINE_PHONE':              9,
        'INPUT_FORMAT_MOBILE_PHONE':                10,
        'INPUT_FORMAT_INTERNATIONAL_PHONE':         11,
        'INPUT_FORMAT_TFN':                         12,
        'INPUT_FORMAT_ABN':                         13,
        'INPUT_FORMAT_ADDRESS':                     14
    });
});