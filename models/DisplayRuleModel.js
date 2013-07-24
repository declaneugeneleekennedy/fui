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

            $t.set('rules', new RuleCollection($t.get('rules')));
        },
        active: function() {
            var $t = this;

            return ($t.get('rules').length > 0);
        },
        getTriggers: function() {
            var $t = this;

            return $t.get('rules').pluck('triggerContentId');
        },
        bindTo: function(form, model) {
            var $t = this;

            _.each($t.getTriggers(), function(id) {
                var content = form.getContents().findWhere({
                    contentId: id
                });

                if(content) {
                    content.on('change:value', function() {
                        model.set('display', $t.check(form));
                    });
                }
            });
        },
        check: function(form) {
            var $t = this;

            var testMethod = function(rule) {
                return rule.check(form);
            };

            if($t.get('logicalOperator') == 'and') {
                return $t.get('rules').every(testMethod);
            } else {
                return $t.get('rules').some(testMethod);
            }
        }
    });
});