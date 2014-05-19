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
            visited: false,
            valid: true
        },
        initialize: function() {
            var $t = this;

            $t.set('sections', new SectionCollection($t.get('sections')));
            $t.set('displayRule', new DisplayRuleModel($t.get('displayRule')));

            if($t.get('pageIcons')) {
                $t.set('pageIcons', new PageIconsModel($t.get('pageIcons')));
            }            

            if(!$t.get('progressBarTitle')) {
                $t.set('progressBarTitle', $t.get('pageTitle'));
            }

            // only set page to invalid if necessary
            $t.get('sections').each(function(section) {
                section.get('contents').each(function(content) {
                    if(content.get('required') && !content.get('valid')) {
                        $t.set('valid', false);
                    }
                });
            });
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

                    // if no form is supplied, just check the current status
                    if(form) {
                        content.validate(form);
                    }

                    if(content.get('valid') === false) {
                        valid = false;
                    } else {
                        if(content.get('valid') == null
                            && content.get('required')
                        ) {
                            valid = false;
                        }
                    }
                });
            });

            return valid;
        }
    });
});