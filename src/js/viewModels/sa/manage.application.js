define(['knockout', 'jquery'], function (ko, $) {
    function viewModel() {
        var self = this;
        self.appid = ko.observable();
        self.app = ko.observable({});
        self.viewModelLoaded = function () {
            //get data for this application
            $.getJSON('/api/application/'+self.appid, function (data) {
                self.app(data);
            });
        };
    }
    return {
        getVM: function () {
            return new viewModel();
        }
    };
});