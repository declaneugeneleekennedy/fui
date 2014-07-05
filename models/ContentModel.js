define(
['jquery', 'underscore', 'backbone', 'models/DisplayRuleModel'],
function($, _, Backbone, DisplayRuleModel) {
    return Backbone.Model.extend({
        defaults: {
            name: null,
            contentId: null,
            contentTypeId: null,
            tooltip: '',
            value: '',
            displayRule: {},
            html: '',
            required: false,
            errors: [],
            display: true,
            valid: null,
            inputs: []
        },
        setExtendedAttributes: function() {
            
        },
        initialize: function() {
            var $t = this;
            
            $t.set('displayRule', new DisplayRuleModel($t.get('displayRule')));

            if($t.get('attribs')) {
                _.each($t.get('attribs'), function(value, name) {
                    $t.set(name, value);
                });

                $t.setExtendedAttributes();

                $t.unset('attribs');
            }

            $t.set('name', 'input' + $t.get('contentId'));
        },
        clearErrors: function() {
            var $t = this;
            $t.set('errors', []);            
        },
        addError: function(message) {
            var $t = this;

            var newErrors = $t.get('errors');

            newErrors.push(message)
            
            $t.set('errors', newErrors);
        },
        hasErrors: function() {
            var $t = this;

            return ($t.get('errors').length > 0);
        },
        validateValue: function(value, form) {
            
        },
        validate: function(form, allowEmpty) {
            var $t = this;

            $t.clearErrors();

            var value = $t.get('value');
            if(!value) {
                if($t.get('required') && !allowEmpty) {
                    $t.addError('Input is required');
                } else {
                    return;
                }
            } else {
                $t.validateValue(value, form);
            }

            $t.set('valid', ($t.get('errors').length == 0));

            
        }
    });
});
