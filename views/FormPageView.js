define(['jquery', 'global', 'js/view',
    'views/StyleView', 'views/ProgressBarView', 'views/SectionView',
    'views/ButtonsView'],
function($, Global, View, StyleView, ProgressBarView, SectionView, ButtonsView) {
    return View.extend({
        templateUrl: 'Page/Form.html',
        tagName: 'div',
        className: 'pageContainer',
        events: {
            'click a': 'changePage'
        },
        render: function() {
            var $t = this;

            $t.setTitle($t.model.get('currentPage').get('pageTitle'));

            var style = new StyleView({ model: Global.get('template') });

            $t.$el.html($t.html({
                title: $t.model.get('currentPage').get('pageTitle')
            }));

            var progress = new ProgressBarView({ model: $t.model });

            $('#progressBar', $t.$el).append(progress.el);

            $t.model.get('currentPage').get('sections').each(function(section) {
                var view = new SectionView({ model: section });

                $('form', $t.$el).append(view.el);
            });

            var buttons = new ButtonsView({ model: $t.model });

            $('form', $t.$el).append(buttons.el);

            $(window).scrollTop(0);
        },
        changePage: function(e) {
            var $t = this;

            e.preventDefault();

            var splitUrl = $(e.currentTarget).attr('href').split('/');
            if(splitUrl) {
                $t.model.set('currentPageUrl', splitUrl[splitUrl.length - 1]);
            }
        }
    });
});