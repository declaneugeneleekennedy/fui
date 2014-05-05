define(['jquery', 'underscore', 'views/ContentView',
    'views/Content/SingleLineInputBoxView', 'views/Content/CheckboxView'],
function($, _, ContentView, SingleLineInputBoxView, CheckboxView) {
    return ContentView.extend({
        tagName: 'div',
        className: 'address',
        templateUrl: 'html/Content/Address.html',

        beforeLoad: function() {
            var $t = this;

            $t.main     = new SingleLineInputBoxView({ model: $t.model.get('main') });
            $t.parts    = [];

            $t.model.get('parts').each(function(part) {
                $t.parts.push(new SingleLineInputBoxView({ model: part }));
            });

            $t.confirm = new CheckboxView({ model: $t.model.get('confirm') });
        },

        render: function() {
            var $t = this;

            $t.bindModelChanges();

            $t.$el.html($t.html());

            var $main   = $('.main',    $t.$el);
            var $parts  = $('.parts',   $t.$el);

            $main.append($t.main.el);

            _.each($t.parts, function(part) {
                $parts.append(part.el);
            });

            $parts.append($t.confirm.el);

            $parts.hide();
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

            $('.parts', $t.$el).hide();
            $('.clarify', $t.$el).hide();
        },

        invalid: function() {
            var $t = this;

            $t.main.$el.addClass('invalid');
            $t.main.$el.removeClass('valid');

            var sel = ($t.model.get('lastMatches')) ? 'clarify' : 'parts';
            $('.' + sel, $t.$el).show();
        },

        resetValid: function() {
            var $t = this;

            $t.main.$el.removeClass('valid');
            $t.main.$el.removeClass('invalid');

            $('.parts', $t.$el).hide();
            $('.clarify', $t.$el).hide();
        }
    });
});