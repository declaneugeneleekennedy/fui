define(['backbone', 'models/MultiColourModel'],
function(Backbone, MultiColourModel) {
    return Backbone.Model.extend({
        defaults: {
            0: null,
            1: null,
            headerBackground: null,
            multipleActiveOverride: null,
            pageTitleOverride: null,
            sectionBarBackground: null,
            sectionBarFont: null
        },
        initialize: function() {
            var $t = this;

            $t.set('0', new MultiColourModel($t.get('0')));
            $t.set('1', new MultiColourModel($t.get('1')));

            $t.set('sectionBarBackground',
                new MultiColourModel($t.get('sectionBarBackground')));
        }
    });
});