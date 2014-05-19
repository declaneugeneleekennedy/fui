define(['views/ProgressBarView'],
function(ProgressBarView) {
    return ProgressBarView.extend({
        id: 'progressBar',
        templateUrl: 'html/Include/ProgressBar/Titles.html',
        className: 'titles',
        applyStyle: function() {
            var $t = this;

            $t.styler.addDynamicCss(
                $t.template.getFileUrl('css/ProgressBar/Titles.css'), {
                    colour: $t.template.get('colour')
                });

            $t.addCss('#progressBar.titles ul li', {
                'width': (100 / $t.model.get('pages').filter(function(model) {
                    return model.get('display') && model.get('pageIcons')
                }).length) + '%'
            });

            var lastVisible;
            $t.model.getPages().each(function(page) {
                if(!page.get('pageIcons')) {
                    $t.addCss('#progressBar ul li#' + page.get('pageUrl'), {'display': 'none'});
                } else {
                    lastVisible = page.get('pageUrl');

                    if(page.get('pageIcons').get('unvisited')) {
                        $t.addCss('#progressBar ul li#' + page.get('pageUrl') + ' a', {
                            'background-image': 'url(' + $t.template.getFileUrl(page.get('pageIcons').get('unvisited')) + ')'
                        });
                    }

                    if(page.get('pageIcons').get('inactive')) {
                        $t.addCss('#progressBar ul li#' + page.get('pageUrl') + '.completed a', {
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
            
            if(lastVisible) {
                $t.addCss('#progressBar ul li#' + lastVisible + ' a', {
                    'border-right': 'none'
                });
            }
        }
    });
});