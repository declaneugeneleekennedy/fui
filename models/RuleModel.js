define(
['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            triggerContentId: null,
            operator: '=',
            value: null
        },
        check: function(form) {
            var $t = this;

            var ruleValue = $t.get('value');
            var formValue = form.getContents()
                .findWhere({contentId: $t.get('triggerContentId')})
                .get('value');

            var operator = $t.get('operator');

            switch(operator) {
                case '>':
                    return (formValue > ruleValue);
                    break;
                case '<':
                    return (formValue < ruleValue);
                    break;
                case '>=':
                    return (formValue >= ruleValue);
                    break;
                case '<=':
                    return (formValue <= ruleValue);
                    break;
                case '!=':
                    return (formValue != ruleValue);
                case '==':
                default:
                    return (formValue == ruleValue);
                    break;
            }
        }
    });
});