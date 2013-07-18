define(['jquery', 'js/view',
    'views/StyleView', 'views/SectionView', 'views/ButtonsView'],
function($, View, StyleView, SectionView, ButtonsView) {
    return View.extend({
        templateUrl: 'Page/Form.html',
        tagName: 'div',
        className: 'pageContainer',
        events: {
            'click a': 'changePage'
        },
        render: function() {
            var $t = this;

            // PLACEHOLDER - replace with progress bar

            $t.setTitle($t.model.get('currentPage').get('pageTitle'));

            var style = new StyleView();

            var links = {}, prefix = '/' + $t.model.get('formUrl');
            $t.model.get('pages').each(function(page) {
                links[page.get('pageTitle')] = prefix + '/' + page.get('pageUrl');
            });

            $t.$el.html($t.html({
                title: $t.model.get('currentPage').get('pageTitle'),
                links: links
            }));

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