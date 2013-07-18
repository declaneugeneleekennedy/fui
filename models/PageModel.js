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
            ordering: 0,
            sections: [],
            displayRule: []
        },
        initialize: function() {
            var $t = this;

            $t.set('sections',      new SectionCollection($t.get('sections')));
            $t.set('displayRule',   new DisplayRuleModel($t.get('displayRule')));
        }
    });
});