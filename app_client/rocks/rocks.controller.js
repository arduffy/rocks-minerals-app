(function() {

    angular
        .module('rocks-minerals-app')
        .controller('rocksCtrl', rocksCtrl);

    rocksCtrl.$inject = ['$scope', 'RockDataService', 'SelectedData'];

    function rocksCtrl($scope, RockDataService, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        console.log(window.location);

        var vm = this;
        vm.content = "Rock Type Data";
        vm.selectedType = "";

        //check selected Rock Type
        if (SelectedData.selectedType !== null) {
            vm.selectedType = SelectedData.selectedType;
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getRockTypeData = function() {
            RockDataService.getRockTypes()
                .then(function(response) {
                    vm.rocktypes = response.data;
                    console.log(response);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        vm.toggleMenu = function() {
            if (vm.class === "toggled") {
                vm.class = "";
            }
            else {
                vm.class = "toggled";
            }
            console.log(vm.class + " is good");
        };

        vm.clearSelectedData = function() {
            vm.selectedType = null;
        }


        //saved departure
        $scope.$watch(
            function() {
                return vm.selectedType;
            },
            function(newValue, oldValue) {
                console.log(oldValue);
                console.log(newValue);
                if (newValue.type !== oldValue.type) {
                    SelectedData.selectedType = newValue;
                }
            },
            true
        );

        //call services
        vm.getRockTypeData();
    }

})();
