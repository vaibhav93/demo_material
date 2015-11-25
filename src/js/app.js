define(['jquery', 'knockout', 'Materialize', 'pager', 'component', 'kovalidation'], function ($, ko, Materialize, pager) {

    //root viewModel. Applies to all pages of app
    var viewModel = {
        role: ko.observable("sa"),
        sideMenu: ko.observableArray(),
        fetchSideMenu: function (role) {
            if (role === undefined)
                role = viewModel.role();
            $.getJSON("/api/sidemenu/" + role, function (data) {
                viewModel.sideMenu(data.menu);
            });
        },
        user: {
            email: 'vaibhav.b.bansal@oracle.com'
        },

    };

    //listen for role change
    viewModel.role.subscribe(function (role) {
        setTimeout(function () {

        }, 2000);
        viewModel.fetchSideMenu(role);
    });

    //Main app object
    window.app = {

        //viewModelLoaded can be put on any viewModel to run callback
        //after template and has been fetched and bindings applied.
        pageLoaded: function (Page) {
            Page.page.ctx.viewModelLoaded();
        },
        
        //method to lazyload view model using requireJS
        requireVM: function (module) {
            return function (callback) {
                console.log('called');
                require([module], function (mod) {
                    console.log(mod.getVM());
                    callback(mod.getVM());
                });
            };
        }
    };

    pager.Href.hash = '#!/';
    // extend your view-model with pager.js specific data
    pager.extendWithPage(viewModel);
    
    viewModel.fetchSideMenu();

    // apply the view-model using KnockoutJS as normal
    ko.applyBindings(viewModel);
    // start pager.js
    pager.start();


});