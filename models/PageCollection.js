define(
['backbone', 'models/PageModel'],
function(Backbone, PageModel) {
    return Backbone.Collection.extend({
        model: PageModel,
        first: function() {
            var $t = this;

            return $t.at(0);
        },
        last: function() {
            var $t = this;

            return $t.at($t.length - 1);
        },
        next: function(current) {
            var $t = this;

            return $t.at($t.indexOf(current) + 1);
        },
        previous: function(current) {
            var $t = this;

            return $t.at($t.indexOf(current) - 1);
        }
    });
});