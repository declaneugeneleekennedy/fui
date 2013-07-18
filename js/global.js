define(['backbone'],
function(Backbone) {
    if(!window.Global) {
        window.Global = new Backbone.Model;
    }

    return window.Global;
});