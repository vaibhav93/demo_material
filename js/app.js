define(['jquery', 'knockout', 'Materialize', 'pager', '../scripts/jquery.components'], function ($, ko, Materialize, pager) {
    
    var viewModel = {
        user:{
            email:'vaibhav.b.bansal@oracle.com'
        },
        demoText: ko.observable('Demo Text'),
        topics:{
            demoText2 : 'yoloo'
        }
    };
    pager.Href.hash = '#!/';
    // extend your view-model with pager.js specific data
    pager.extendWithPage(viewModel);
    // apply the view-model using KnockoutJS as normal
    ko.applyBindings(viewModel);
    // start pager.js
    pager.start();


})