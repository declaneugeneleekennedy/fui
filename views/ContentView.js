define(['jquery', 'js/view'],
function($, View) {
    return View.extend({
        tagName: 'div',
        className: 'contentElement',
        errors: null,
        bindModelChanges: function() {
            var $t = this;

            $t.model.on('change:display', function() {
                if($t.model.get('display')) {
                    $t.$el.show();
                } else {
                    $t.$el.hide();
                }
            });

            $t.model.trigger('change:display');

            $t.model.on('change:valid', function() {
                var value = $t.model.get('valid');

                if(value) {
                    $t.valid();
                }

                if(!value) {
                    if(value === false) {
                        $t.invalid();
                    } else {
                        $t.resetValid();
                    }
                }
            });

            if($t.model.get('value')) {
                $t.model.trigger('change:valid');
            }
        },
        valid: function() {
            var $t = this;

            $t.$el.addClass('valid');
            $t.$el.removeClass('invalid');

            $t.hideErrors();
        },
        invalid: function() {
            var $t = this;

            $t.$el.addClass('invalid');
            $t.$el.removeClass('valid');

            $t.displayErrors();
        },
        resetValid: function() {
            var $t = this;

            $t.$el.removeClass('valid');
            $t.$el.removeClass('invalid');

            $t.hideErrors();

        },
        render: function() {
            var $t = this;

            $t.bindModelChanges();

            if($t.model.get('required')) {
                $t.$el.addClass('required');
            }

            $t.$el.html($t.html($t.model.toJSON()));
        },
        displayErrors: function() {
            var $t = this;

            if($t.errors == null) {
                $t.errors = $(document.createElement('div'))
                    .addClass('errors');

                $('.input', $t.$el).append($t.errors);
            }

            $t.errors.text($t.model.get('errors').join(', '));
        },
        hideErrors: function() {
            var $t = this;

            if($t.errors != null) {
                $t.errors.remove();
                $t.errors = null;
            }
        },
        setValue: function(e) {
            
        }
    });
});