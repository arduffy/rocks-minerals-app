
(function() {

  angular
    .module('rocks-minerals-app')
    .service('RockData', rockData);

  rockData.$inject = ['$http'];
  function rockData ($http) {
      var getRocks = function(){
          return $http.get('/api/rocksdata');
      }

      return {
          getRocks : getRocks,
  }
  }

})();