define(['jquery', 'js/view'],
function($, View) {
    return View.extend({
        tagName: 'div',
        className: 'progressBar',
        events: {
            'click li.unlocked a': 'changePage',
            'click li.locked a': 'stopEvent'
        },
        render: function() {
            var $t = this;

            var links = [];
            $t.model.get('pages').each(function(page) {
                links.push($t.getLinkObject(page));

                page.on('change:display', function() {
                    $t.render();
                });
            });

            $t.$el.html($t.html({
                links: links,
                formatClass: $t.getFormatClass()
            }));

            $t.applyStyle();
        },
        applyStyle: function() {
            console.log('Calling ProgressBarView.applyStyle() no-op');
        },
        getFormatClass: function() {
            var $t = this;

            return 'format' + $t.model.get('progressBarFormatId');
        },
        getLinkHref: function(page) {
            var $t = this;

            return ($t.model.get('formUrl') + '/' + page.get('pageUrl'));
        },
        getLinkObject: function(page) {
            var $t = this;

            var classes = [];

            classes.push((page == $t.model.get('currentPage')) ? 'active' : 'inactive');

            classes.push((page.get('display')) ? 'unlocked' : 'locked');

            return {
                id: page.get('pageUrl'),
                href: $t.getLinkHref(page),
                text: page.get('progressBarTitle'),
                className: classes.join(' ')
            }; 
        },
        changePage: function(e) {
            var $t = this;

            e.preventDefault();

            var splitUrl = $(e.currentTarget).attr('href').split('/');
            if(splitUrl) {
                $t.model.set('currentPageUrl', splitUrl[splitUrl.length - 1]);
            }
        },
        stopEvent: function(e) {
            var $t = this;

            e.preventDefault();
            e.stopPropagation();
        }
    });
});