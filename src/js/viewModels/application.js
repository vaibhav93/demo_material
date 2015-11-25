define(['knockout', 'jquery'], function (ko, $) {
    function viewModel() {
        var self = this;
        self.showNewAppForm = function () {
            var appForm = $('#app-form');
            if (appForm.is(":hidden")) {
                appForm.slideDown('slow');
            } else {
                appForm.slideUp();
            }
        };
        self.newApp = {
            name: ko.observable(''),
            desc: ko.observable('')
        };
        self.submitApp = function () {
            //console.log(viewModel.applications.newApp);
            if (self.newApp.name().length > 0 && self.newApp.desc().length > 0) {
                self.appsList.push({
                    name: self.newApp.name(),
                    desc: self.newApp.desc(),
                    icon: 'assignment_ind',
                    color: 'blue'
                });
                setTimeout(function () {
                    self.newApp.name('');
                    self.newApp.desc('');
                    $('#app-form').slideUp();
                }, 1000);
            }

        };
        self.viewModelLoaded = function(){
            self.getApps();
        };
        self.getApps = function () {
            $.getJSON("/api/applications", function (data) {
                self.appsList(data.apps);
            });
        };
        self.appsList = ko.observableArray();
    }
    return {
        getVM: function () {
            return new viewModel();
        }
    };
});