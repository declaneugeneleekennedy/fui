define(
['jquery', 'vpl/model', 'models/ContentCollection', 'models/ContentModel'],
function($, VplModel, ContentCollection, ContentModel) {
    return VplModel.extend({
        defaults: {},
        initialize: function(attributes) {
            var $t = this;

            var contentCollection = new ContentCollection();
            $.each(attributes.contents, function() {
                contentCollection.add(new ContentModel(this));
            });

            $t.set('contents', contentCollection);
        }
    });
});