// @todo [dk] - implement other views when defined
define(['views/ProgressBar/TitlesView'],
function(TitlesView) {
    var classes = {
        1: TitlesView,
        2: TitlesView,
        3: TitlesView
    };

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