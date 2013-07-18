define(['jquery', 'underscore', 'models/ContentModel'],
function($, _, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            question: '',
            questionIcon: '',
            numOfLines: 10
        }, ContentModel.prototype.defaults)
    });
});
