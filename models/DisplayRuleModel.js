define(
['backbone', 'models/PolicyCollection'],
function(Backbone, PolicyCollection) {
    return Backbone.Model.extend({
        defaults: {
            logicalOperator: 'and',
            policies: []
        },
        initialize: function() {
            var $t = this;

            $t.set('policies', new PolicyCollection($t.get('policies')));
        },
        active: function() {
            var $t = this;

            return ($t.get('policies').length > 0);
        },
        getTriggers: function() {
            var $t = this;

            return $t.get('policies').pluck('triggerContentId');
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

            var testMethod = function(policy) {
                return policy.check(form);
            };

            if($t.get('logicalOperator') == 'and') {
                return $t.get('policies').every(testMethod);
            } else {
                return $t.get('policies').some(testMethod);
            }
        }
    });
});