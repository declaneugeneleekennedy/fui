// @todo [dk] - implement other views when defined
define(['enums/ProgressBarFormatEnum', 'views/ProgressBar/TitlesView'],
function(ProgressBarFormatEnum, TitlesView) {
    var classes = {};

    classes[ProgressBarFormatEnum.PROGRESS_BAR_FORMAT_PAGE_NUMBERS] = TitlesView;
    classes[ProgressBarFormatEnum.PROGRESS_BAR_FORMAT_PAGE_TITLES]  = TitlesView;
    classes[ProgressBarFormatEnum.PROGRESS_BAR_FORMAT_PERCENTAGE]   = TitlesView;

    return {
        getInstance: function( model) {
            var formatId = model.get('progressBarFormatId');
            if(classes[formatId]) {
                return new classes[formatId]({ model: model });
            }

            throw 'Unknown Progress Bar format: "' + formatId + '"';
        }
    };
});