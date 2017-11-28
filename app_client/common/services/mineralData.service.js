
(function() {

  angular
    .module('rocks-minerals-app')
    .service('MineralData', mineralData);

  mineralData.$inject = ['$http'];
  function mineralData ($http) {
      var getMinerals = function(){
          return $http.get('/api/mineraldata');
      }

      return {
          getMinerals : getMinerals,
  }
  }

})();