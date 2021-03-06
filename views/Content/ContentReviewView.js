define(['underscore', 'global', 'views/ContentView',
    'models/FormModelFactory'],
function(_, Global, ContentView, FormModelFactory) {
    return ContentView.extend({
        templateUrl: 'html/Content/ContentReview.html',
        beforeLoad: function() {
            var $t = this;

            $t.model.get('contents').models = [];

            _.each($t.model.get('contents').contentIds, function(contentId) {
                var model = FormModelFactory.getInstance()
                    .getContents().findWhere({
                        contentId: contentId
                    });

                if(model) {
                    $t.model.get('contents').models
                        .push(model.toJSON());
                }
            });
        }
    });
});