requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery',
        knockout: 'knockout-3.3.0',
        Materialize: 'materialize.amd',
        app: '../app',
        hammerjs: 'hammerjs',
        jqueryHammer: 'jquery.hammer',
        pager: 'pager.min',
        test: 'test',
        jquerymock:'jquery.mockjax.min',
        dropdown: 'Materialize/dropdown',
	kovalidation:'knockout.validation.min',
        sideNav: 'Materialize/sideNav',
        component: '../scripts/jquery.components',
        velocity: 'Materialize/velocity.min',
        application: '../viewModels/application',
        manageApp: '../viewModels/sa/manage.application',
        MaterializeDeps: 'Materialize.deps',
        jqueryEasing:'Materialize/jquery.easing.1.3',
        materialBox:'Materialize/materialbox',     
    },
    shim: {
        'Materialize': ['MaterializeDeps'],
        'jquerymock'  : ["jquery"],
	'kovalidation':{
		deps:['knockout']	
	}	
    }

});

requirejs(['app'], function () {
    console.log('loaded');
});
