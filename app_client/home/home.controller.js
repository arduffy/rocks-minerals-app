(function() {

  angular
    .module('rocks-minerals-app')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Rocks & Minerals";
    
    //check selected Departure
  
    
    //check selected Arrival
 
    
    //check selected weight
        
  }

})();
