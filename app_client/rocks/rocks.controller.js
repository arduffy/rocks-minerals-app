(function() {

    angular
        .module('rocks-minerals-app')
        .controller('rockCtrl', rockCtrl);

    rockCtrl.$inject = ['$scope', 'RockData', 'SelectedData'];

    function rockCtrl($scope, RockData, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        console.log(window.location);

        var vm = this;
        vm.content = "Rock Data";
        vm.selectedType = "";

        //check selected Type
        if (SelectedData.selectedType !== null) {
            vm.selectedType = SelectedData.SelectedType
            
        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getRockData = function() {
            RockData.getRocks()
                .then(function(response) {
                    vm.rocks = response.data;
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
    
        //saved departure
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
        vm.getRockData();
    }

})();