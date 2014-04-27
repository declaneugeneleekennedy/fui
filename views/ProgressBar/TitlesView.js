define(['views/ProgressBarView'],
function(ProgressBarView) {
    return ProgressBarView.extend({
        id: 'progressBar',
        templateUrl: 'html/Include/ProgressBar/Titles.html',
        className: 'titles',
        applyStyle: function() {
            var $t = this;

            $t.addStylesheet(
                $t.template.getFileUrl('css/ProgressBar/Titles.css'));

            $t.addCss('#progressBar.titles ul li', {
                'width': (100 / $t.model.get('pages').filter(function(model) {
                    return model.get('display') && model.get('pageIcons')
                }).length) + '%'
            });

            $t.model.getPages().each(function(page) {
                if(!page.get('pageIcons')) {
                    $t.addCss('#progressBar ul li#' + page.get('pageUrl'), {'display': 'none'});
                } else {
                    if(page.get('pageIcons').get('unvisited')) {
                        $t.addCss('#progressBar ul li#' + page.get('pageUrl') + '.unvisited a', {
                            'background-image': 'url(' + $t.template.getFileUrl(page.get('pageIcons').get('unvisited')) + ')'
                        });
                    }

                    if(page.get('pageIcons').get('inactive')) {
                        $t.addCss('#progressBar ul li#' + page.get('pageUrl') + '.inactive a', {
                            'background-image': 'url(' + $t.template.getFileUrl(page.get('pageIcons').get('inactive')) + ')'
                        });
                    }

                    if(page.get('pageIcons').get('active')) {
                        $t.addCss('#progressBar ul li#' + page.get('pageUrl') + '.active a', {
                            'background-image': 'url(' + $t.template.getFileUrl(page.get('pageIcons').get('active')) + ')'
                        });
                    }
                }
            });
        }
    });
});