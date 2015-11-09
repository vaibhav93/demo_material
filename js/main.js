requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        knockout: 'knockout-3.3.0.js',
        Materialize: 'materialize.0.97.2',
        app: '../app',
        hammerjs: 'hammer.min',
        velocity: 'velocity.min',
        jqueryHammer: 'jquery.hammer'
    },
    shim: {
        'Materialize': ['jquery', 'hammerjs', 'jqueryHammer', 'velocity']
    }
});

require(['app'], function () {
    console.log('loaded')
});