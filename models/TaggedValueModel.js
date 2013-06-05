define(['underscore', 'backbone'],
function(_, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            property: null,
            model: null,
            rawTag: null,
            triggerContentId: null,
            defaultValue: null,
            startingValue: null
        },
        processTag: function(value) {
            var $t = this;

            var replaceValue = $t.get('startingValue')
                .replace($t.get('rawTag'), value || $t.get('defaultValue'));

            $t.get('model').set($t.get('property'), replaceValue);
        }
    });
});