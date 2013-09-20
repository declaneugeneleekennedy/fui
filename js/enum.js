define(function() {
    /*if(typeof Object.freeze != 'function') {
        Object.freeze = function(obj) {
            var props = Object.getOwnPropertyNames(obj);

            for ( var i = 0; i < props.length; i++ ) {
                var desc = Object.getOwnPropertyDescriptor( obj, props[i] );

                if ( "value" in desc ) {
                    desc.writable = false;
                }

                desc.configurable = false;
                Object.defineProperty(obj, props[i], desc);
            }

            return Object.preventExtensions(obj);
        };
    }*/

    var instances = {};

    return {
        getInstance: function(name, values) {
            if(!instances[name]) {
                instances[name] = values; //Object.freeze(values);
            }

            return instances[name];
        }
    };
});