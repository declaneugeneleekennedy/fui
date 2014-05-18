define(['jquery', 'js/view'],
function($, View) {
    return View.extend({
        templateUrl: 'html/Include/Buttons.html',
        tagName: 'div',
        className: 'buttons',
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

            $t.model.get('currentPage').on('change:valid', function() {
                $t.render();
            });
        },
        getButtons: function() {
            console.log('Calling ButtonsView.getButtons() no-op');
        },
        getButton: function(className, text, subtitle, enabled) {
            if(enabled == undefined) {
                enabled = true;
            }

            return {
                className: className,
                text: text,
                subtitle: subtitle,
                enabled: enabled
            };
        }
    });
});