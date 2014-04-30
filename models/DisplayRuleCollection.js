define(['backbone', 'models/DisplayRuleModel'],
function(Backbone, DisplayRuleModel) {
    return Backbone.Collection.extend({
        model: DisplayRuleModel,
        bindTo: function(form, model) {
            var $t = this;

            $t.each(function(rule) {
                rule.bindTo(form, model);
            });
        },
        active: function() {
            var $t = this;

            $t.some(function(rule) {
                return rule.active();
            });
        }
    });
});