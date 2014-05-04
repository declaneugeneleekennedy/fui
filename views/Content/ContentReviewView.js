define(['underscore', 'global', 'views/ContentView'],
function(_, Global, ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/ContentReview.html',
        beforeLoad: function() {
            var $t = this;

            $t.model.get('contents').models = [];

            _.each($t.model.get('contents').contentIds, function(contentId) {
                var model = Global.get('form').getContents().findWhere({
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