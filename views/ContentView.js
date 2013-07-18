define(['jquery', 'js/view', 'loader'],
function($, View) {
    return View.extend({
        tagName: 'div',
        className: 'contentElement',
        bindModelChanges: function() {
            var $t = this;

            $t.model.on('change:display', function() {
                if($t.model.get('display')) {
                    $t.$el.show();
                } else {
                    $t.$el.hide();
                }
            });

            $t.model.on('change:valid', function() {
                var value = $t.model.get('valid');

                if(value) {
                    $t.$el.addClass('valid');
                    $t.$el.removeClass('invalid');
                }

                if(!value) {
                    if(value === false) {
                        $t.$el.addClass('invalid');
                        $t.$el.removeClass('valid');
                    } else {
                        $t.$el.removeClass('valid');
                        $t.$el.removeClass('invalid');
                    }
                }
            });            
        },
        render: function() {
            var $t = this;

            $t.bindModelChanges();

            $t.prepare();

            $t.$el.html($t.html($t.model.toJSON()));
        },
        setValue: function(e) {
            console.log('Calling ContentView.setValue() no-op');
        },
        prepare: function() {
            console.log('Calling ContentView.prepare() no-op');
        }
    });
});