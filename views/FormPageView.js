define(['jquery', 'underscore', 'global', 'js/view', 
    'views/ProgressBarViewFactory', 'views/ContactView', 'views/SectionView',
    'views/ButtonsView'],
function($, _, Global, View, ProgressBarViewFactory, ContactView, SectionView, ButtonsView) {
    return View.extend({
        tagName: 'div',
        className: 'pageContainer',
        templateUrl: 'html/Page/Form.html',
        beforeLoad: function() {
            var $t = this;

            $t.contact  = new ContactView({ model: $t.model });
            $t.progress = ProgressBarViewFactory.getInstance($t.model);

            $t.sections = [];

            $t.model.get('currentPage').get('sections').each(function(section) {
                $t.sections.push(new SectionView({
                    model:          section,
                    isFirst:        ($t.sections.length == 0),
                    isFirstPage:    ($t.model.get('currentPage') == $t.model.getFirstPage())
                }));
            });

            $t.buttons = new ButtonsView({
                model:       $t.model,
                isFirstPage: ($t.model.get('currentPage') == $t.model.getFirstPage())
            });
        },
        render: function() {
            var $t = this;

            $t.$el.html($t.html({
                title: $t.model.get('formTitle'),
                pageTitle: $t.model.get('currentPage').get('pageTitle')
            }));

            var $nav    = $('#navigation', $t.$el);
            var $form   = $('form', $t.$el);
            
            $nav.append($t.contact.el);
            $nav.append($t.progress.el);

            _.each($t.sections, function(section) {
                $form.append(section.el);
            });

            $form.append($t.buttons.el);
        }
    });
});