define(['jquery', 'underscore', 'global', 'js/view',
    'views/ProgressBarViewFactory', 'views/ContactView', 'views/SectionView',
    'views/ButtonsView'],
function($, _, Global, View,
    ProgressBarViewFactory, ContactView, SectionView,
    ButtonsView
) {
    return View.extend({
        templateUrl: 'html/Page/Form.html',
        tagName: 'div',
        className: 'pageContainer',
        beforeLoad: function() {
            var $t = this;

            // navigation views
            $t.contact     = new ContactView({ model: $t.model });
            $t.progress    = ProgressBarViewFactory.getInstance($t.model);

            // section views
            $t.sections = [];

            $t.model.get('currentPage').get('sections').each(function(section) {
                var options = {
                    model: section
                };

                options.collapsible = ($t.model.get('currentPage') == $t.model.getFirstPage());
                options.collapsed   = !($t.model.get('currentPage').get('sections').first() == section);

                $t.sections.push(new SectionView(options));
            });

            // buttons view
            $t.buttons = new ButtonsView({ model: $t.model });
        },
        render: function() {
            var $t = this;

            $t.setTitle($t.model.get('currentPage').get('pageTitle'));

            var pageTitle = ($t.model.get('currentPage').get('enablePageTitle')) ?
                $t.model.get('currentPage').get('pageTitle') : false;

            console.log($t.model.toJSON());

            $t.$el.html($t.html({
                title: $t.model.get('formTitle'),
                pageTitle: pageTitle
            }));

            var $nav    = $t.$('#navigation');
            var $form   = $t.$('form');
            
            $nav.append($t.contact.el);
            $nav.append($t.progress.el);

            _.each($t.sections, function(section) {
                $form.append(section.el);
            });

            $form.append($t.buttons.el);
        }
    });
});