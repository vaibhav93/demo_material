define(['knockout', 'jquery'], function (ko, $) {
    function viewModel() {
        var self = this;
        self.viewModelLoaded = function () {
            //console.log('topics loaded');
            window.topicPageComponents();

        };
    }
    return {
        getVM: function () {
            return new viewModel();
        }
    };
});