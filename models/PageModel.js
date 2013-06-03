define(
['backbone', 'models/SectionCollection', 'models/DisplayRuleModel'],
function(Backbone, SectionCollection, DisplayRuleModel) {
    return Backbone.Model.extend({
        idAttribute: 'pageUrl',
        defaults: {
            pageTitle: "Title",
            showPageTitle: true,
            progressBarTitle: "Progress",
            persona: 1,
            sections: [],
            displayRule: []
        },
        initialize: function() {
            var $t = this;

            $t.attributes.sections      = new SectionCollection($t.get('sections'));
            $t.attributes.displayRule   = new DisplayRuleModel($t.get('displayRule'));
        }
    });
});