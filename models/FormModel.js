define(
['vpl/model', 'models/FormCollection', 'models/FormPageModel', 'models/FormPageCollection'],
function(VplModel, FormCollection, FormPageModel, FormPageCollection) {
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
            pages:                  []
        },
        setMembers: function(modelData) {
            var $t = this;

            var pageCollection = new FormPageCollection();

            $.each(modelData[0].get('pages'), function() {
                pageCollection.add(new FormPageModel(this));
            });

            $t.attributes.pages = pageCollection;
        }
    });
});