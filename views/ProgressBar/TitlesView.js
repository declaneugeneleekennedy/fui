define(['views/ProgressBarView'],
function(ProgressBarView) {
    return ProgressBarView.extend({
        id: 'progressBar',
        templateUrl: 'Include/ProgressBar/Titles.html',
        className: 'titles',
        applyStyle: function() {
            var $t = this;

            $t.addStylesheet(
                $t.template.getFileUrl('asset/css/ProgressBar/Titles.css'));

            $t.addCss('#progressBar.titles ul li', {
                'width': (100 / $t.model.get('pages').length) + '%'
            });
        }
    });
});