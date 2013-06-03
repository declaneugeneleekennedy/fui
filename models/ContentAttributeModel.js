define(['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            changeEvent: 'change',
            template: '',
            required: false
        }
    });
});