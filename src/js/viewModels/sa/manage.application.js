define(['knockout', 'jquery', 'komapping'], function (ko, $, komapping) {
    ko.mapping = komapping;

    function viewModel() {
        var self = this;
        self.appid = ko.observable();
        self.app = ko.observable({});
        self.appBeforeEdit = {};
        self.viewModelLoaded = function () {
            //get data for this application
            $.getJSON('/api/application/' + self.appid, function (data) {
                //map json data to app object on VM
                self.app(ko.mapping.fromJS(data));
            });
        };
        self.editNameFlag = ko.observable(false);
        self.editName = function () {
            // Save app object state before edit in case of edit cancellation. Unmap observable first to get plain old JS object
            self.appBeforeEdit = ko.mapping.toJS(self.app);
            //set edit flag to true
            self.editNameFlag(true);
        };
        self.saveName = function(){
            self.editNameFlag(false);
        };
        self.resetName = function(){
            self.app().name(self.appBeforeEdit.name);
            self.editNameFlag(false);
        };
    }
    return {
        getVM: function () {
            return new viewModel();
        }
    };
});