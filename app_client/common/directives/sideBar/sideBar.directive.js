(function () {

  angular
    .module('rocks-minerals-app')
    .directive('sidebar', sidebar);

  function sidebar () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sidebar/sidbar.template.html'
    };
  }
})();