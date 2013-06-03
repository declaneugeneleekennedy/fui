define(['backbone', 'underscore'],
function(Backbone, _) {
    return Backbone.Model.extend({
        defaults: {
            template: null,
            element: null
        },
        getHtml: function(data) {
            var $t = this;

            if(!$t.get('template')) {
                throw "Can't render element: no template found";
            }

            return _.template($t.get('template')).call($t, data);
        }
    });
});