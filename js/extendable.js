define(['underscore', 'backbone'],
function(_, Backbone) {
    var obj = function(options) {
        var $t = this;

        if(options) {
            _.each(options, function(value, name) {
                $t[name] = value;
            });
        }

        if(_.isFunction($t.initialize)) {
            $t.initialize(options);
        }
    };

    obj.extend = Backbone.Model.extend;

    return obj;
});