define(['js/enum'],
function(Enum) {
    return Enum.getInstance('ResponseType', {
        'RESPONSE_TYPE_SINGLE':     'single',
        'RESPONSE_TYPE_MULTIPLE':   'multiple'
    });
});