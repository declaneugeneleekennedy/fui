define(['jquery', 'backbone'],
function($, Backbone) {
    return Backbone.Collection.extend({
        deferred: null,
        initialize: function() {
            var $t = this, count = 0;

            $t.deferred = $.Deferred().progress(function() {
                ++count;

                if(count == $t.length) {
                    $t.deferred.resolve();
                }
            });
        },
        load: function() {
            var $t = this;

            var count = 0;

            if($t.length) {
                $t.each(function(model) {
                    var $p = model.fetch();

                    $.when($p).then(function() {
                        $t.deferred.notify();
                    });
                });
            } else {
                $t.deferred.resolve();
            }

            return $t.deferred.promise();
        },
        add: function(model) {
            var $t = this;

            Backbone.Collection.add.call($t, model);

            return $t.deferred.promise();
        }
    });
});