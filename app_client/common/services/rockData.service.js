(function() {

  angular
    .module('rocks-minerals-app')
    .service('RockDataService', rockData);

  rockData.$inject = ['$http'];
  function rockData ($http) {
      var getRocks = function(){
          return $http.get('/api/rockdata/');
      }
      
      var getRockTypes = function(){
        return $http.get('/api/rocktypes');
      }
      
      var getRockDataForType = function(type){
          return $http.get('/api/rocktypes/' + type)
      }

      return {
          getRocks : getRocks,
          getRockTypes: getRockTypes,
          getRockDataForType: getRockDataForType
      }
  }

})();