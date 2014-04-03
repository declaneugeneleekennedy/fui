define(['jquery', 'global', 'js/view',
    'views/ProgressBarViewFactory', 'views/ContactView', 'views/SectionView',
    'views/ButtonsView'],
function($, Global, View, ProgressBarViewFactory, ContactView, SectionView, ButtonsView) {
    return View.extend({
        templateUrl: 'Page/Form.html',
        tagName: 'div',
        className: 'pageContainer',
        render: function() {
            var $t = this;

            $t.applyTemplate();

            $t.setTitle($t.model.get('currentPage').get('pageTitle'));

            $t.$el.html($t.html({
                title: $t.model.get('currentPage').get('pageTitle')
            }));

            $nav    = $('#navigation', $t.$el);
            $form   = $('form', $t.$el);
            
            $nav.append(new ContactView({ model: $t.model }).el);
            $nav.append(ProgressBarViewFactory.getInstance($t.model).el);

            $t.model.get('currentPage').get('sections').each(function(section) {
                $form.append(new SectionView({ model: section }).el);
            });

            $form.append(new ButtonsView({ model: $t.model }).el);

            $(window).scrollTop(0);
        },
        applyTemplate: function() {
            var $t = this;

            var $template = Global.get('template');

            $t.addStylesheet($template.getFileUrl('asset/css/default.css'));

            $t.addCss('#headerContainer', {
                'background-image': 'url(' + $template.getSettingUrl('headerImage') + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'top right'
            });

            $t.addCss('#headerContainer h1', {
                'background-image': 'url(' + $template.getSettingUrl('formTitleImage') + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'top right'
            });
        }
    });
});