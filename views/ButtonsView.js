define(['jquery', 'js/view'],
function($, View) {
    return View.extend({
        templateUrl: 'html/Include/Buttons.html',
        tagName: 'div',
        className: 'buttons',
        events: {
            'click .next button': 'nextPage',
            'click .previous button': 'previousPage',
            'click .save button': 'saveForm'
        },
        elementClasses: {
            1: 'single',
            2: 'double',
            3: 'triple'
        },
        render: function() {
            var $t = this;

            var buttons = $t.getButtons();

            $t.$el.html($t.html({buttons: buttons}));

            if($t.options.isFirstPage) {
                $t.$el.hide();
            }

            $t.$el.addClass($t.elementClasses[buttons.length]);
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
                buttons.push($t.getButton('complete', $t.getTemplate().get('btnLabelComplete')));
            } else {
                buttons.push($t.getButton('next', $t.getTemplate().get('btnLabelNext')));
            }

            return buttons;
        },
        getButton: function(className, value, subtitle) {
            return {
                className: className,
                value: value,
                subtitle: subtitle
            };
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
        }
    });
});