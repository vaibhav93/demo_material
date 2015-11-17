define(['jquery', 'knockout', 'Materialize', 'pager', '../scripts/jquery.components'], function ($, ko, Materialize, pager) {

    var viewModel = {
        sideMenu: ko.observableArray(),
        fetchSideMenu: function () {
            $.getJSON("http://nameless-sun-2869.getsandbox.com/sidemenu", function (data) {
                viewModel.sideMenu(data);
            });
        },
        user: {
            email: 'vaibhav.b.bansal@oracle.com'
        },
        topics: {
            pageLoaded: function () {
                //console.log('topics loaded');
                window.topicPageComponents();

            }
        },
        applications: {
            showNewAppForm: function () {
                var appForm = $('#app-form')
                if (appForm.is(":hidden")) {
                    appForm.slideDown('slow')
                } else {
                    appForm.slideUp();
                }
            },
            newApp: {
                name: ko.observable(''),
                desc: ko.observable('')
            },
            submitApp: function () {
                //console.log(viewModel.applications.newApp);
                if (viewModel.applications.newApp.name().length > 0 && viewModel.applications.newApp.desc().length > 0) {
                    viewModel.applications.appsList.push({
                        name: viewModel.applications.newApp.name(),
                        desc: viewModel.applications.newApp.desc(),
                        icon: 'assignment_ind',
                        color: 'blue'
                    });
                    setTimeout(function () {
                        viewModel.applications.newApp.name('');
                        viewModel.applications.newApp.desc('');
                        $('#app-form').slideUp();
                    }, 1000)
                }

            },
            appsList: ko.observableArray([
                {
                    name: 'Aria People',
                    desc: 'Oracle employee repository',
                    icon: 'assignment_ind',
                    color: 'blue'
                },
                {
                    name: 'Oracle OIM',
                    desc: 'Oracle Identity Management',
                    icon: 'folder',
                    color: ''
                },
                {
                    name: 'Oracle GIS',
                    desc: 'Oracle Global information security',
                    icon: 'insert_chart',
                    color: 'green'
                },
                {
                    name: 'Oracle Taleo',
                    desc: 'Oracle recruitment portal',
                    icon: 'play_arrow',
                    color: 'red'
                }
            ])
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


})