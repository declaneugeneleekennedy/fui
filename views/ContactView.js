define(['js/view', 'models/TemplateModelFactory'],
function(View, TemplateModelFactory) {
    return View.extend({
        templateUrl: 'html/Include/Contact.html',
        tagName: 'div',
        className: 'contact',
        render: function() {
            var $t = this;

            $t.$el.html($t.html({
                href: $t.getHref(
                    $t.getTemplate().get('formContactType'),
                    $t.getTemplate().get('formContactContent')),
                text: $t.getTemplate().get('formContactContent')
            }));

            $t.addCss('#navigation .contact a', {
                'background-image': 'url(' + $t.getTemplate().getSettingUrl('sprite') + ')'
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