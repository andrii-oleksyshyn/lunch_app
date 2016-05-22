(function() {
    'use strict';

    angular
        .module('app')
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope', 'lunchFactory'];

    function LunchController($scope, lunchFactory) {
        var vm = this;
        vm.title = 'LunchController';
        vm.formData = {};

        lunchFactory.getResultsFromParse().then(function(data) {
            vm.lunchResults = data || [];
            // Update the view when data is loaded
            $scope.$apply();
        });

        vm.sendFormData = function() {
            vm.lunchResults.push(vm.formData);
            lunchFactory.sendResultsToParse(vm.formData);
            vm.formData = {};
        };

        vm.removeResults = function() {
            vm.lunchResults = [];
            lunchFactory.removeResultsFromParse();
        };
    }
})();