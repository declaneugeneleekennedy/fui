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
            template: '',
            required: false,
            errors: [],
            display: true,
            valid: null,
            inputs: []
        },
        setExtendedAttributes: function() {
            console.log('Calling ContentModel.setExtendedAttributes no-op');
        },
        initialize: function() {
            var $t = this;
            
            $t.set('displayRule', new DisplayRuleModel($t.get('displayRule')));

            if($t.get('contentAttributes')) {
                _.each($t.get('contentAttributes'), function(value, name) {
                    $t.set(name, value);
                });

                $t.setExtendedAttributes();

                $t.unset('contentAttributes');
            }

            $t.set('name', 'input' + $t.get('contentId'));
        },
        bindChanges: function(contentElement) {
            console.log('Calling ContentModel.bindChanges no-op')
        },
        getHtml: function(form) {
            var $t = this;

            var element = $(document.createElement('div'))
                .attr('id', 'element_' + $t.get('contentId'))
                .addClass('contentElement')
                .append($($t.renderElement(form)));

            if($t.get('required')) {
                element.addClass('required');
            }

            return element;
        },
        getElementData: function(form) {
            var $t = this;

            return $t.toJSON();
        },
        renderElement: function(form) {
            var $t = this;

            if(!$t.get('template')) {
                throw "Can't render element: no template found";
            }

            return _.template($t.get('template')).call($t, $t.getElementData(form));
        },
        clearErrors: function() {
            var $t = this;
            $t.set('errors', []);            
        },
        addError: function(message) {
            var $t = this;
            $t.get('errors').push(message);
        },
        validateValue: function(value, form) {
            console.log('Calling ContentModel.validateValue no-op with value %s', value);
        },
        validate: function(form, allowEmpty) {
            var $t = this;

            $t.clearErrors();

            var value = $t.get('value');
            if(!value) {
                if($t.get('required') && !allowEmpty) {
                    $t.addError('Input is required');
                }
            } else {
                $t.validateValue(value, form);
                $t.set('valid', ($t.get('errors').length == 0));
            }

            console.log($t.get('errors'), 'Validation Errors');
        }
    });
});
