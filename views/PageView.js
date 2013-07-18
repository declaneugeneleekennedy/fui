define(['jquery', 'backbone', 'views/FormView'],
function($, Backbone, FormView) {
    return Backbone.View.extend({
        id: 'formContainer',
        tagName: 'div',

        render: function() {
            var $t = this;

            var formView = new FormView({
                model: $t.model.get('form')
            });

            $t.$el.append(formView.el);
        }
    });
});