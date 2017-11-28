(function() {

  angular
    .module('rocks-minerals-app')
    .controller('detailPageCtrl', detailPageCtrl);

  detailPageCtrl.$inject = ['$scope', 'MineralData'];

  function detailPageCtrl($scope, MineralData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Rocks & Minerals";
    vm.submitSelectedData = "";
    
    //if statements to determine what type of mineral/rock to display//
    if(vm.submitSelectedData = "Native")
    
    if(vm.submit){}
    
    
  }

})();