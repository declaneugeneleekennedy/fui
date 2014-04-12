define(['underscore', 'global', 'views/ContentView'],
function(_, Global, ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/ContentReview.html',
        beforeLoad: function() {
            var $t = this;

            var models = [];

            _.each($t.model.get('contents'), function(contentId) {
                var model = Global.get('form').getContents().findWhere({
                    contentId: contentId
                });

                if(model) {
                    models.push(model.toJSON());
                }
            });

            $t.model.set('models', models);
        }
    });
});