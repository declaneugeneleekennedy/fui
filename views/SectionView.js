define(['jquery', 'js/view', 'views/ContentViewFactory'],
function($, View, ContentViewFactory) {
    return View.extend({
        templateUrl: 'Include/Section.html',
        tagName: 'div',
        className: 'section',
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

            $t.model.get('contents').each(function(content) {
                var view = ContentViewFactory.getInstance(content);

                $('.sectionBody', $t.$el).append(view.el);
            });
        }
    });
});