define(
['vpl/model', 'models/FormCollection', 'models/PageModel', 'models/PageCollection'],
function(VplModel, FormCollection, PageModel, PageCollection) {
    return VplModel.extend({
        idAttribute: 'formUrl',
        collection: FormCollection,
        defaults: {
            formVerId:              1,
            formTitle:              'Form',
            formUrl:                'form',
            progressBarEnabled:     false,
            progressBarFormat:      'pageNumbers',
            totalPersona:           1,
            saveAllowed:            false,
            signaturePanelEnabled:  false,
            pages:                  new PageCollection
        },
        setMembers: function(modelData) {
            var $t = this;

            var pageCollection = new PageCollection();

            $.each(modelData[0].get('pages'), function() {
                pageCollection.add(new PageModel(this));
            });

            $t.attributes.pages = pageCollection;
        }
    });
});