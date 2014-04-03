define(['underscore', 'models/ContentModel'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            question: '',
            questionIcon: '',
            responseType: 0,
            output: '',
            options: [],
            inputType: 'radio',
        }, ContentModel.prototype.defaults),
        setExtendedAttributes: function(contentAttributes) {
            var $t = this;

            if($t.get('responseType') == 'single') {
                $t.set('inputType', 'radio');
            } else {
                $t.set('inputType', 'checkbox');
            }
        }
    });
});