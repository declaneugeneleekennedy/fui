define(['jquery', 'underscore', 'js/extendable'],
function($, _, Extendable) {
    return Extendable.extend({
        promises: [],
        deferred: null,
        initialize: function() {
            var $t = this, count = 0;

            $t.deferred = $.Deferred().progress(function() {
                ++count;

                if(count == $t.promises.length) {
                    $t.reset();
                    $t.deferred.resolve();
                }
            });
        },
        load: function() {
            var $t = this;

            var count = 0;

            if($t.promises.length) {
                _.each($t.promises, function($p) {
                    $.when($p).then(function() {
                        $t.deferred.notify();
                    });
                });
            } else {
                $t.deferred.resolve();
            }

            return $t.deferred.promise();
        },
        add: function(promise) {
            var $t = this;

            $t.promises.push(promise);

            return $t.deferred.promise();
        },
        reset: function() {
            var $t = this;

            $t.promises = [];
        }
    });
});