define(
['underscore', 'backbone', 'models/DisplayRuleModel',
    'models/ContentModelFactory', 'models/ContentCollection'],
function(_, Backbone, DisplayRuleModel, ContentModelFactory, ContentCollection) {
    return Backbone.Model.extend({
        idAttribute: 'sectionId',
        defaults: {    
            sectionTitle: null,
            persona: 1,
            displayRule: {},
            contents: [],
            display: true,
            element: null
        },
        initialize: function() {
            var $t = this;

            $t.set('displayRule',   new DisplayRuleModel($t.get('displayRule')));

            var model, confirm, contents = new ContentCollection;

            _.each($t.get('contents'), function(content) {
                model = ContentModelFactory.getInstance(content);

                contents.add(model);

                // add a confirmation field if required
                if(model.get('confirmationLabel')) {
                    confirm = ContentModelFactory.getInstance(_.defaults({
                        contentId:          model.get('contentId') + 'Confirmation',
                        question:           model.get('confirmationLabel'),
                        mustMatch:          model,
                        confirmationLabel:  ''
                    }, model.attributes));

                    model.set('mustMatch', confirm);

                    contents.add(confirm);
                }
            });

            $t.set('contents', contents);
        }
    });
});
