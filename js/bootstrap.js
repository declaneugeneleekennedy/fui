(function() {
    define('jquery', [], function() {
        return window.jQuery;
    });

    require.config({
        baseUrl: clientHost,

        paths: {
            framework:  frameworkHost + '/js',
            vpl:        frameworkHost + '/js/vpl',
            underscore: frameworkHost + '/js/underscore/underscore-min',
            backbone:   frameworkHost + '/js/backbone/backbone-min',

            loader:     clientHost + '/js/loader',
            router:     clientHost + '/js/router',
            global:     clientHost + '/js/global',

            cors: frameworkHost + '/js/jquery/cors',

            client:     clientHost,
            templates:  clientHost + '/templates',
            views:      clientHost + '/views',
            models:     clientHost + '/models'
        },

        shim: {
            'underscore': {
              exports: '_'
            },
            'backbone': {
              deps: [ 'underscore', 'jquery' ],
              exports: 'Backbone'
            }
        }
    });

    require(['global', 'router'],
    function(Global, Router) {
        Global.set('router', new Router());

        Backbone.history.start({pushState: false, hashChange: true});
    });
})();