requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        knockout: 'knockout-3.3.0',
        Materialize: 'materialize.0.97.2',
        app: '../app',
        hammerjs: 'hammerjs',
        velocity: 'velocity.min',
        jqueryHammer: 'jquery.hammer',
        pager:'pager.min',
        test:'test'
    },
    shim: {
        'Materialize': ['jquery','jqueryHammer']
    }
});

require(['app'], function () {
    console.log('loaded')
});