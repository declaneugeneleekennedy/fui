define(['js/enum'],
function(Enum) {
    return Enum.getInstance('ProgressBarFormat', {
        'PROGRESS_BAR_FORMAT_PAGE_NUMBERS': 1,
        'PROGRESS_BAR_FORMAT_PAGE_TITLES':  2,
        'PROGRESS_BAR_FORMAT_PERCENTAGE':   3
    });
});