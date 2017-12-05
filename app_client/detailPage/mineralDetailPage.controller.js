(function() {

  angular
    .module('rocks-minerals-app')
    .controller('mineralDetailPageCtrl', mineralDetailPageCtrl);

  mineralDetailPageCtrl.$inject = ['$scope', 'MineralDataService', 'SelectedData'];

  function mineralDetailPageCtrl($scope, MineralDataService, SelectedData) {
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


    vm.getMineralDataForType = function(type) {

      MineralDataService.getMineralDataForType(vm.selectedType.type)
        .then(function(response) {
          
          console.log(response.data);
          
          //since find may select many, just return the single object
          //vm.takeoffData = response.data;
          //console.log(vm.takeoffData);

          vm.name = response.data[0].name;
          vm.hardness = response.data[0].hardness;
          vm.streak = response.data[0].streak;
          vm.luster - response.data[0].luster;

        })
        .catch(function(e) {
          console.log(e);
        });
    }
    
    //call services
    vm.getMineralDataForType(vm.selectedType);  

  }

})();