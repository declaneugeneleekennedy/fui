define(
['backbone', 'models/RuleCollection'],
function(Backbone, RuleCollection) {
    return Backbone.Model.extend({
        defaults: {
            logicalOperator: 'and',
            rules: []
        },
        initialize: function() {
            var $t = this;

            $t.attributes.rules = new RuleCollection($t.get('rules'));
        }
    });
});