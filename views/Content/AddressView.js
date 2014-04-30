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

            //$parts.hide();
        },

        afterRender: function() {
            var $t = this;

            $('input[name="' + $t.model.get('main').get('name') + '"]', $t.$el).autocomplete({
                source: function( request, response ) {
                    $.ajax({
                        url: "//poc1.vermilian.com/queryAddress.php?searchText=" + request.term,
                        dataType: "json",
                        data: {
                            featureClass: "P",
                            style: "full",
                            maxRows: 12,
                            name_startsWith: request.term
                        },
                        success: function( data ) {
                            response( $.map( data.addresses, function( item ) {

                                return {
                                    label: item.canonical,
                                    value: item.canonical
                                }
                            }));
                        }
                    });
                }
            });
        },

        valid: function() {
            var $t = this;

            $t.main.$el.addClass('valid');
            $t.main.$el.removeClass('invalid');

            $('.parts', $t.$el).hide();
        },

        invalid: function() {
            var $t = this;

            $t.main.$el.addClass('invalid');
            $t.main.$el.removeClass('valid');

            $('.parts', $t.$el).show();
        },

        resetValid: function() {
            var $t = this;

            $t.main.$el.removeClass('valid');
            $t.main.$el.removeClass('invalid');

            $('.parts', $t.$el).hide();
        }
    });
});