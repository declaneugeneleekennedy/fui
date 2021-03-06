(function() {
    define('jquery', [], function() {
        return window.jQuery;
    });

    require.config({
        baseUrl: clientHost,

        paths: {
            framework:  frameworkHost + '/js',
            vpl:        frameworkHost + '/js/vpl',
            underscore: frameworkHost + '/js/underscore/underscore-1.6.0',
            backbone:   frameworkHost + '/js/backbone/backbone-1.1.2',

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
        Global.set('router',        new Router());
        
        Global.set('clientHost',    clientHost);
        Global.set('frameworkHost', frameworkHost);
        Global.set('dataHost',      dataHost);

        Backbone.history.start({ pushState: true });
    });
})();