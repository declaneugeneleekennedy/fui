define(['jquery', 'underscore', 'js/view',
    'views/ProgressBarViewFactory', 'views/ContactView', 'views/SectionView',
    'views/Buttons/DefaultView', 'views/Buttons/SavePageView',
    'views/Buttons/SaveCompletePageView', 'views/Buttons/FinalPageView'],
function($, _, View,
    ProgressBarViewFactory, ContactView, SectionView,
    ButtonsDefaultView, ButtonsSavePageView,
    ButtonsSaveCompletePageView, ButtonsFinalPageView
) {
    return View.extend({
        templateUrl: 'html/Page/Form.html',
        tagName: 'div',
        className: 'pageContainer',
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

            $t.buttons = new ($t.getButtonsView())({
                model: $t.model,
                isFirstPage: ($t.model.get('currentPage') == $t.model.getFirstPage())
            });
        },
        getButtonsView: function() {
            var $t = this;

            if($t.model.get('savePage')) {
                if($t.model.get('savePage') == $t.model.get('currentPage')) {
                    return ButtonsSavePageView;
                }

                if($t.model.get('saveCompletePage') == $t.model.get('currentPage')) {
                    return ButtonsSaveCompletePageView;
                }
            }

            if($t.model.getLastPage() == $t.model.get('currentPage')) {
                return ButtonsFinalPageView;
            }

            return ButtonsDefaultView;
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