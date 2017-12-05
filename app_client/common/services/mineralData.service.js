
(function() {

  angular
    .module('rocks-minerals-app')
    .service('MineralDataService', mineralData);

  mineralData.$inject = ['$http'];
  function mineralData ($http) {
      var getMinerals = function(){
          return $http.get('/api/mineraldata');
      }
      
      //return mineral types
      var getMineralTypes = function(){
          return $http.get('/api/mineraltypes');
      }
      
      var getMineralDataForType = function(type){
          return $http.get('/api/mineraltypes/' + type)
      }
      
      
      
      return {
          getMinerals : getMinerals, 
          getMineralTypes: getMineralTypes,
          getMineralDataForType: getMineralDataForType
      }
  }

})();