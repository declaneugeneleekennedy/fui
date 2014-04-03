define(['jquery', 'js/view'],
function($, View) {
    return View.extend({
        templateUrl: 'Include/Buttons.html',
        tagName: 'div',
        className: 'buttons',
        events: {
            'click .next': 'nextPage',
            'click .previous': 'previousPage'
        },
        render: function() {
            var $t = this;

            $t.$el.html($t.html({buttons: $t.getButtons()}));
        },
        getButtons: function() {
            var $t = this, buttons = [], template = Global.get('template');

            if($t.model.get('currentPage') != $t.model.get('pages').at(0)) {
                buttons.push($t.getButton('previous', template.get('btnLabelPrevious')));
            }

            if($t.model.get('saveProgressEnabled')) {
                buttons.push($t.getButton('save', template.get('btnLabelSave')));
            }

            if($t.model.get('currentPage') == $t.model.get('pages').at($t.model.get('pages').length - 1)) {
                buttons.push($t.getButton('complete', template.get('btnLabelComplete')));
            } else {
                buttons.push($t.getButton('next', template.get('btnLabelNext')));
            }

            return buttons;
        },
        getButton: function(className, value) {
            return {
                className: className,
                value: value
            };
        },
        nextPage: function() {
            var $t = this;

            if($t.model.get('currentPage').validate($t.model)) {
                var nextPage = $t.model.getNextPage();
                if(nextPage) {
                    $t.model.set('currentPageUrl', nextPage.get('pageUrl'));
                }
            }
        },
        previousPage: function() {
            var $t = this;

            var previousPage = $t.model.getPreviousPage();
            if(previousPage) {
                $t.model.set('currentPageUrl', previousPage.get('pageUrl'));
            }
        }
    });
});