define(['js/enum'], function(Enum) {
    return Enum.getInstance('ContentType', {
        'CONTENT_TYPE_SINGLE_LINE_INPUT_BOX': 1,
        'CONTENT_TYPE_MULTIPLE_CHOICE':       2,
        'CONTENT_TYPE_MULTILINE_INPUT_BOX':   3,
        'CONTENT_TYPE_DESCRIPTIVE_TEXT':      4,
        'CONTENT_TYPE_IDENTITY_VERIFICATION': 5,
        'CONTENT_TYPE_CONTENT_REVIEW':        6,
        'CONTENT_TYPE_ADDRESS':               7
    });
});
