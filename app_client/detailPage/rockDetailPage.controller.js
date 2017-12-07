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


                    $scope.records = [{
                        "name": response.data[0].name,
                        "major": response.data[0].major,
                        "minor": response.data[0].minor,
                        "color": response.data[0].color
                    }]




                    // vm.name = response.data[0].name;
                    // vm.hardness = response.data[0].hardness;
                    // vm.streak = response.data[0].streak;
                    // vm.luster - response.data[0].luster;

                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //call services
        vm.getRockDataForType(vm.selectedType);

    }

})();
