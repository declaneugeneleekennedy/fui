define(
['vpl/model', 'models/DisplayRuleCollection', 'models/RuleCollection'],
function(VplModel, DisplayRuleCollection, RuleCollection) {
    return VplModel.extend({
        collection: DisplayRuleCollection,
        defaults: {
            logicalOperator: 'and',
            rules: new RuleCollection
        },
        _operators: ['and', 'or'],
        setOperator: function(operator) {
            var $t = this;

            if(!$.inArray(operator, $t._operators)) {
                throw 'Unknown operator specified: ' + operator;
            }

            $t.set('logicalOperator') = operator;
        }
    });
});