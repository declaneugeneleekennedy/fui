define(['global', 'js/view'],
function(Global, View) {
    return View.extend({
        templateUrl: 'Include/Contact.html',
        tagName: 'div',
        className: 'contact',
        render: function() {
            var $t = this;

            $template = Global.get('template');

            $t.$el.html($t.html({
                href: $t.getHref($template.get('formContactType'), $template.get('formContactContent')),
                text: $template.get('formContactContent')
            }));

            $t.addCss('#navigation .contact a', {
                'background-image': 'url(' + $template.getSettingUrl('sprite') + ')'
            });
        },
        getHref: function(type, content) {
            var $t = this;

            switch(type) {
                case 'phone':
                default:
                    return 'tel:' + content;
                    break;
            }
        }
    });
});