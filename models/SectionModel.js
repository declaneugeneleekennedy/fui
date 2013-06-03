define(
['underscore', 'backbone', 'models/DisplayRuleModel',
    'models/ContentCollection', 'text!templates/include/Section.html'],
function(_, Backbone, DisplayRuleModel, ContentCollection, Template) {
    return Backbone.Model.extend({
        template: Template,
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

            $t.attributes.displayRule   = new DisplayRuleModel($t.get('displayRule'));
            $t.attributes.contents      = new ContentCollection($t.get('contents'));
        },
        getHtml: function() {
            var $t = this;

            return _.template($t.template).call($t, {
                sectionId:  $t.id,
                title:      $t.get('sectionTitle')
            });
        }
    });
});
