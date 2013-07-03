define(['underscore', 'models/ContentModel', 'text!templates/element/IdentityVerification.html'],
function(_, ContentModel, Template) {
    return ContentModel.extend({
        defaults: _.defaults({
            template: Template
        }, ContentModel.prototype.extend)
    });
});