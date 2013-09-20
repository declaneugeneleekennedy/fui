define(
['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        operatorMethods: {
            '>': 'greater',
            '<': 'less',
            '>=': 'greaterOrEqual',
            '<=': 'lessOrEqual',
            '!=': 'notEqual',
            '==': 'equal'
        },
        defaults: {
            triggerContentId: null,
            operator: '=',
            value: null
        },
        check: function(form) {
            var $t = this;

            if(!$t.operatorMethods[$t.get('operator')]) {
                throw 'Unknown policy operator: "' + $t.get('operator');
            }

            var value = form.getContents()
                .findWhere({ contentId: $t.get('triggerContentId') })
                .get('value');

            return $t[$t.operatorMethods[$t.get('operator')]].call($t, value);
        },
        greater: function(value) {
            var $t = this;

            return (value > $t.get('value'));
        },
        less: function(value) {
            var $t = this;
            
            return (value < $t.get('value'));
        },
        greaterOrEqual: function(value) {
            var $t = this;
            
            return (value >= $t.get('value'));
        },
        lessOrEqual: function(value) {
            var $t = this;
            
            return (value <= $t.get('value'));
        },
        notEqual: function(value) {
            var $t = this;
            
            return (value != $t.get('value'));
        },
        equal: function(value) {
            var $t = this;
            
            return (value == $t.get('value'));
        }
    });
});