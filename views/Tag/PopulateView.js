define(['views/TagView', 'models/FormModelFactory'],
function(TagView, FormModelFactory) {
    return TagView.extend({
        patterns: {
            defaultValue: /^\{.+\|.+\|(.+)\}$/i,
            contentId: /^\{.+\|([0-9]+)\|.+\}/i
        },
        evaluate: function() {
            var $t = this;

            var $form   = FormModelFactory.getInstance(),
                $val    = $t.model.get('defaultValue');

            if($form) {
                var content = $form.getContents().findWhere({
                    contentId: parseInt($t.model.get('contentId'))
                });

                if(content) {
                    // ensure tag is updated when the model changes
                    content.on('change:value', function() {
                        $t.render();
                    });

                    if(content.get('value')) {
                        $val = content.get('value');
                    }
                }
            }

            return $val;
        }
    });
});