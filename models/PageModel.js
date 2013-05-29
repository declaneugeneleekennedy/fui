define(
[
    'vpl/model',
    'models/PageCollection',
    'models/SectionCollection',
    'models/SectionModel', 
    'models/DisplayRuleModel'
],
function(VplModel, PageCollection, SectionCollection, SectionModel, DisplayRuleModel) {
    return VplModel.extend({
        idAttribute: 'pageUrl',
        collection: PageCollection,
        defaults: {
            pageTitle: "Title",
            showPageTitle: true,
            progressBarTitle: "Progress",
            sections: new SectionCollection,
            displayRule: new DisplayRuleModel
        },
        setMembers: function(modelData) {
            var $t = this;

            var sectionCollection = new SectionCollection;

            $.each(modelData[0].get('sections'), function() {
                sectionCollection.add(new SectionModel(this));
            });

            $t.set('sections', sectionCollection);

            if(typeof modelData[0].get('displayRule') != DisplayRuleModel) {
                modelData[0].set('displayRule', new DisplayRuleModel(modelData[0].get('displayRule')));
            }
        }
    });
});