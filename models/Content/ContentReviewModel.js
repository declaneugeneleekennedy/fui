define(['underscore', 'models/ContentModel',
    'models/ContentCollection', 'text!templates/element/ContentReview.html'],
function(_, ContentModel, ContentCollection, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            changeEvent: null,
            template: Template,
            contents: []
        }, ContentModel.prototype.defaults),
        getElementData: function(form) {
            var $t = this;

            var models = [], content;

            _.each($t.get('contents'), function(contentId) {
                content = form.getContents().findWhere({
                    contentId: contentId
                });

                if(content) {
                    models.push(content);
                }
            });

            var data = $t.toJSON();

            data.contents = new ContentCollection(models).toJSON();

            return data;
        }
    });
});