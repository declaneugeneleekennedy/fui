define(['jquery', 'underscore', 'views/ContentView',
    'views/Content/SingleLineInputBoxView', 'views/Content/CheckboxView'],
function($, _, ContentView, SingleLineInputBoxView, CheckboxView) {
    return ContentView.extend({
        tagName: 'div',
        className: 'address',
        templateUrl: 'html/Content/Address.html',

        beforeLoad: function() {
            var $t = this;

            $t.model.on('change:value', function() {
                $t.setMainInput($t.model.get('value'));
            });

            $t.main     = new SingleLineInputBoxView({ model: $t.model.get('main') });
            $t.parts    = [];

            $t.model.get('parts').each(function(part) {
                $t.parts.push(new SingleLineInputBoxView({ model: part }));
            });

            $t.confirm = new CheckboxView({ model: $t.model.get('confirm') });

            $t.confirm.model.on('change:value', function() {
                $t.scrollTo($t.model.get('main').get('name'));

                var $p = $t.model.queryAddress(
                    $t.model.get('parts').pluck('value').join(' '));

                $.when($p).then(function(data) {
                    if(!data.addresses.length || data.addresses.length > 1) {                        
                        $t.resetParts();
                        $t.invalid();
                    } else {
                        $t.setMainInput(data.addresses[0].canonical);
                        $t.valid();
                    }
                });
            });

            $t.deny = new CheckboxView({ model: $t.model.get('deny') });

            $t.deny.model.on('change:value', function() {
                $t.showParts();
            });
        },

        setMainInput: function(value) {
            var $t = this;

            $('input', $t.main.$el)
                .val(value);
        },

        resetParts: function() {
            var $t = this;

            _.each($t.parts, function(part) {
                $('input', part.$el).val('');
            });

            $('input', $t.confirm).prop('checked', false);
        },

        render: function() {
            var $t = this;

            $t.bindModelChanges();

            $t.$el.html($t.html());

            var $main       = $('.main',    $t.$el);
            var $clarify    = $('.clarify', $t.$el);
            var $parts      = $('.parts',   $t.$el);

            $main.append($t.main.el);

            $('.confirm', $t.$el).hide();

            _.each($t.parts, function(part) {
                $parts.append(part.el);
            });

            $parts.append($t.confirm.el);
        },

        afterRender: function() {
            var $t = this;

            $('input[name="' + $t.model.get('main').get('name') + '"]', $t.$el).one('focus', function() {
                $(this).autocomplete({
                    source: function(request, response) {
                        var $p = $t.model.queryAddress(request.term)
                            .done(function(data) {
                                response(_.pluck(data.addresses, 'canonical'));
                            });
                    }
                });
            });
        },

        valid: function() {
            var $t = this;

            $t.main.$el.addClass('valid');
            $t.main.$el.removeClass('invalid');

            $t.main.hideErrors();
            $t.main.model.clearErrors();

            $('.confirm', $t.$el).hide();
        },

        invalid: function() {
            var $t = this;

            $t.resetValid();

            $t.main.$el.addClass('invalid');
            $t.main.$el.removeClass('valid');

            $t.main.model.set('errors', $t.model.get('errors'));

            $t.main.displayErrors();

            $('.confirm', $t.$el).show();

            if($t.model.get('lastMatches').length) {
                $t.showClarify();
            } else {
                $t.showParts();
            }
        },

        showClarify: function() {
            var $t = this;

            var $list = $('.clarify .addressOptions', $t.$el);

            $list.empty();

            _.each($t.model.get('lastMatches'), function(address) {
                $list.append($(document.createElement('li'))
                    .text(address)
                    .click(function() {
                        $t.model.get('main').set('value', address);
                        $t.setMainInput(address);
                    }));
            });

            $('.clarify', $t.$el).append($t.deny.el);

            $('.clarify', $t.$el).show();
        },

        showParts: function() {
            var $t = this;

            $('.parts', $t.$el).show();
        },

        resetValid: function() {
            var $t = this;

            $t.main.$el.removeClass('valid');
            $t.main.$el.removeClass('invalid');

            $t.main.hideErrors();
            $t.main.model.clearErrors();

            $('.confirm', $t.$el).hide();
            $('.parts', $t.$el).hide();
            $('.clarify', $t.$el).hide();
        }
    });
});