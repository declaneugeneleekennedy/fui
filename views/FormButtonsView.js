define(['jquery', 'views/ButtonsView'],
function($, ButtonsView) {
    return ButtonsView.extend({
        events: {
            'click .next button': 'nextPage',
            'click .previous button': 'previousPage',
            'click .save button': 'savePage'
        },
        getButtons: function() {
            var $t = this, buttons = [];

            if($t.model.get('currentPage') != $t.model.getFirstPage()) {
                buttons.push($t.getButton('previous', $t.getTemplate().get('btnLabelPrevious')));
            }

            if($t.model.get('enableCompleteLater') && $t.model.get('currentPage') != $t.model.getFirstPage()) {
                buttons.push($t.getButton('save', $t.getTemplate().get('btnLabelSave'), 'Save My Application'));
            }

            if($t.model.get('currentPage') == $t.model.get('pages').at($t.model.get('pages').length - 1)) {
                buttons.push($t.getButton(
                    'complete',
                    $t.getTemplate().get('btnLabelComplete'),
                    null,
                    $t.model.get('currentPage').get('valid')
                ));
            } else {
                buttons.push($t.getButton(
                    'next',
                    $t.getTemplate().get('btnLabelNext'),
                    null,
                    $t.model.get('currentPage').get('valid')
                ));
            }

            return buttons;
        },
        nextPage: function(e) {
            var $t = this;

            e.preventDefault();

            var nextPage = $t.model.getNextPage();
            if(nextPage) {
                $t.model.set('currentPageUrl', nextPage.get('pageUrl'));
            }
        },
        previousPage: function(e) {
            var $t = this;

            e.preventDefault();

            var previousPage = $t.model.getPreviousPage();
            if(previousPage) {
                $t.model.set('currentPageUrl', previousPage.get('pageUrl'));
            }
        },
        savePage: function(e) {
            var $t = this;

            e.preventDefault();
            $t.model.set('currentPageUrl',
                $t.model.get('savePage').get('pageUrl'));
        }
    });
});