/*

single: e.g. radio button, drop-down
multiple: e.g. checkboxes

*/

define(['js/enum'],
function(Enum) {
    return Enum.getInstance('ResponseType', {
        'RESPONSE_TYPE_SINGLE':     'single',
        'RESPONSE_TYPE_MULTIPLE':   'multiple'
    });
});