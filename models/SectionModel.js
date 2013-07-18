define(
['underscore', 'backbone', 'models/DisplayRuleModel',
    'models/ContentModelFactory', 'models/ContentCollection'],
function(_, Backbone, DisplayRuleModel, ContentModelFactory, ContentCollection) {
    return Backbone.Model.extend({
        idAttribute: 'sectionId',
        defaults: {    
            sectionTitle: 'Section',
            persona: 1,
            displayRule: {},
            contents: [],
            display: true,
            element: null
        },
        initialize: function() {
            var $t = this;

            $t.set('displayRule',   new DisplayRuleModel($t.get('displayRule')));

            var contents = new ContentCollection;
            _.each($t.get('contents'), function(content) {
                contents.add(ContentModelFactory.getInstance(content));
            });

            $t.set('contents', contents);
        }
    });
});
