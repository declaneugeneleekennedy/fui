define(
['vpl/model', 'models/FormCollection', 'models/PageModel', 'models/PageCollection',
    'models/SectionCollection', 'models/ContentCollection'],
function(VplModel, FormCollection, PageModel, PageCollection, SectionCollection, ContentCollection) {
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

            $t.attributes = modelData[0].attributes;

            var pageCollection = new PageCollection();

            $.each(modelData[0].get('pages'), function() {
                pageCollection.add(new PageModel(this));
            });

            $t.attributes.pages = pageCollection;
        },
        getPages: function() {
            var $t = this;

            return $t.get('pages');
        },
        getSections: function() {
            var $t = this;

            var sections = new SectionCollection;

            $t.get('pages').each(function(page) {
                page.get('sections').each(function(section) {
                    sections.add(section);
                });
            });

            return sections;
        },
        getContents: function() {
            var $t = this;

            var contents = new ContentCollection;

            $t.getSections().each(function(section) {
                section.get('contents').each(function(content) {
                    contents.add(content);
                });
            });

            return contents;
        }
    });
});