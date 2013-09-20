define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            active: null,
            visited: null,
            unvisited: null
        }
    });
});