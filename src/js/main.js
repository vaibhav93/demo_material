requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery:'jquery',
        knockout: 'knockout-3.3.0',
        Materialize: 'materialize.0.97.2',
        app: '../app',
        hammerjs: 'hammerjs',
        velocity: 'velocity.min',
        jqueryHammer: 'jquery.hammer',
        pager:'pager.min',
        test:'test',
        component:'../scripts/jquery.components'
    },
    shim: {
        'Materialize': ['jquery','jqueryHammer']
    }
});

requirejs(['app'], function () {
    console.log('loaded');
});