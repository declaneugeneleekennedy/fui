define(['jquery', 'underscore', 'js/view',
    'views/Content/SingleLineInputBoxView'],
function($, _, View, SingleLineInputBoxView) {
    return View.extend({
        tagName: 'div',
        className: 'address',
        templateUrl: 'html/Content/Address.html',

        beforeLoad: function() {
            var $t = this;

            $t.main     = new SingleLineInputBoxView({ model: $t.model.get('main') });
            $t.parts    = [];

            $t.model.get('parts').each(function(part) {
                $t.parts.push(new SingleLineInputBoxView({ model: part }));
            });
        },

        render: function() {
            var $t = this;

            $t.$el.html($t.html());

            var $main   = $('.main',    $t.$el);
            var $parts  = $('.parts',   $t.$el);

            $main.append($t.main.el);

            _.each($t.parts, function(part) {
                $parts.append(part.el);
            });

            // $parts.hide();
        }
    });
});