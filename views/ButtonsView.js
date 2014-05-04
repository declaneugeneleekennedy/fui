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
        render: function() {
            var $t = this;

            $t.$el.html($t.html({buttons: $t.getButtons()}));

            if($t.options.isFirstPage) {
                $t.$el.hide();
            }
        },
        getButtons: function() {
            var $t = this, buttons = [], template = Global.get('template');

            if($t.model.get('currentPage') != $t.model.getFirstPage()) {
                buttons.push($t.getButton('previous', template.get('btnLabelPrevious')));
            }

            if($t.model.get('enableCompleteLater') && $t.model.get('currentPage') != $t.model.getFirstPage()) {
                buttons.push($t.getButton('save', template.get('btnLabelSave'), 'Save My Application'));
            }

            if($t.model.get('currentPage') == $t.model.get('pages').at($t.model.get('pages').length - 1)) {
                buttons.push($t.getButton('complete', template.get('btnLabelComplete')));
            } else {
                buttons.push($t.getButton('next', template.get('btnLabelNext')));
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