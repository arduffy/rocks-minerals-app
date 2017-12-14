(function() {

  angular
    .module('rocks-minerals-app')
    .controller('mineralsCtrl', mineralsCtrl);

  mineralsCtrl.$inject = ['$scope', 'MineralDataService', 'SelectedData'];

  function mineralsCtrl($scope, MineralDataService, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Mineral Type Selection";
    vm.selectedType = "";

    //check selected Mineral Type
    if(SelectedData.selectedType !== null){
      vm.selectedType = SelectedData.selectedType;
    }

    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getMineralTypeData = function() {
      MineralDataService.getMineralTypes()
        .then(function(response) {
          vm.mineraltypes = response.data;
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
    
    vm.clearSelectedData = function(){
      vm.selectedType = null;
    }


    
    //saved type
    $scope.$watch(
      function(){
        return vm.selectedType;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.type !== oldValue.type){
          SelectedData.selectedType = newValue;
        } 
      }, 
      true
    );
    

    //call services
    vm.getMineralTypeData();

  }

})();
