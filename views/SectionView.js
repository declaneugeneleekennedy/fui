define(['jquery', 'underscore', 'js/view', 'views/ContentViewFactory'],
function($, _, View, ContentViewFactory) {
    return View.extend({
        templateUrl: 'html/Include/Section.html',
        tagName: 'div',
        className: 'section',
        beforeLoad: function() {
            var $t = this;

            $t.contents = [];

            $t.model.get('contents').each(function(content) {
                $t.contents.push(ContentViewFactory.getInstance(content));
            });
        },
        render: function() {
            var $t = this;

            $t.model.bind('change:display', function() {
                if($t.model.get('display')) {
                    $t.$el.show();
                } else {
                    $t.$el.hide();
                }
            });

            $t.model.trigger('change:display');

            $t.$el.attr('id', 'section' + $t.model.get('sectionId'));

            $t.$el.html($t.html($t.model.toJSON()));

            _.each($t.contents, function(content) {
                $('.sectionBody', $t.$el).append(content.el);
            });
        }
    });
});