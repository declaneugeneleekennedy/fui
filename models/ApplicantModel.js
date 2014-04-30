define(['backbone', 'models/DisplayRuleModel'],
function(Backbone, DisplayRuleModel) {
    return Backbone.Model.extend({
        defaults: {
            displayRule: null,
            name: []
        },
        initialize: function() {
            var $t = this;

            $t.set('displayRule', new DisplayRuleModel($t.get('displayRule')));
        }
    });
});