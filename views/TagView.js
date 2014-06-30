define(['underscore', 'backbone'],
function(_, Backbone) {
    return Backbone.View.extend({
        tagName: 'span',
        className: 'tag',
        patterns: {},
        initialize: function(options) {
            var $t = this;

            $t.model = new Backbone.Model({
                tag: options.tag
            });

            _.each($t.patterns, function(pattern, property) {
                $t.model.set(property, pattern.exec($t.model.get('tag'))[1] || null);
            });

            $t.render();
        },
        render: function() {
            var $t = this;

            $t.$el.html($t.evaluate());
        },
        evaluate: function() {
            console.log('Calling TagView.evaluate() no-op');
        }
    });
});