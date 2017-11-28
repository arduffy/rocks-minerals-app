
(function() {

  angular
    .module('rocks-minerals-app')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedType : ''
      };
  }

})();