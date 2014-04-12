define(['backbone'],
function(Backbone) {
    if(!window.Global) {
        var Global = Backbone.Model.extend({
            getInstance: function(name, type) {
                var $t = this;

                if(!$t.has(name)) {
                    $t.set(name, new type);
                }

                return $t.get(name);
            }
        });
        
        window.Global = new Global;
    }

    return window.Global;
});