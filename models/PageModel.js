define(
['backbone', 'models/SectionCollection', 'models/DisplayRuleModel', 'models/PageIconsModel'],
function(Backbone, SectionCollection, DisplayRuleModel, PageIconsModel) {
    return Backbone.Model.extend({
        idAttribute: 'pageUrl',
        defaults: {            
            pageTitle: "Title",
            showPageTitle: true,
            progressBarTitle: null,
            persona: 1,
            ordering: 0,
            sections: [],
            display: true,
            displayRule: [],
            visited: false
        },
        initialize: function() {
            var $t = this;

            $t.set('sections',      new SectionCollection($t.get('sections')));
            $t.set('displayRule',   new DisplayRuleModel($t.get('displayRule')));
            $t.set('pageIcons',     new PageIconsModel($t.get('pageIcons')));

            if(!$t.get('progressBarTitle')) {
                $t.set('progressBarTitle', $t.get('pageTitle'));
            }
        },
        validate: function(form) {
            var $t = this;

            var valid = true;

            $t.get('sections').each(function(section) {
                if(!section.get('display')) {
                    return;
                }

                section.get('contents').each(function(content) {
                    if(!content.get('display')) {
                        return;
                    }

                    content.validate(form)

                    if(content.get('valid') === false) {
                        valid = false;
                    }
                });
            });

            return valid;
        }
    });
});