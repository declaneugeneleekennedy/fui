define(['jquery', 'underscore', 'models/ContentModel', 'text!templates/element/MultilineInputBox.html'],
function($, _, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            template: Template,
            question: '',
            questionIcon: '',
            numOfLines: 10
        }, ContentModel.prototype.defaults),
        bindChanges: function(contentElement) {
            var $t = this;

            $('[name="' + $t.get('name') + '"]').on('blur', function() {
                $t.set('value', $(this).val());
            });
        }
    });
});
