(function() {

    angular
        .module('rocks-minerals-app')
        .controller('rockDetailPageCtrl', rockDetailPageCtrl);

    rockDetailPageCtrl.$inject = ['$scope', 'RockDataService', 'SelectedData'];

    function rockDetailPageCtrl($scope, RockDataService, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        //console.log(window.location);

        console.log("The selected type is: " + SelectedData.selectedType.type);

        if (SelectedData.selectedType !== null) {
            vm.selectedType = SelectedData.selectedType;
            vm.content = vm.selectedType.type;
        }

        console.log("The selected type is: " + vm.selectedType.type);


        vm.getRockDataForType = function(type) {

            RockDataService.getRockDataForType(vm.selectedType.type)
                .then(function(response) {

                    console.log(response.data)
                    vm.rocks = response.data;
                    
                    var obj = {name: "name", major: "major", minor: "minor", color: "color"};
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //call services
        vm.getRockDataForType(vm.selectedType);

    }

})();
