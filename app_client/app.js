(function () {

  angular.module('rocks-minerals-app', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("Begin rocks-minerals-app");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/minerals/', {
        templateUrl: '/minerals/minerals.view.html',
        controller: 'mineralsCtrl',
        controllerAs: 'vm'
      })
      .when('/rocks/', {
        templateUrl: '/rocks/rocks.view.html',
        controller: 'rocksCtrl',
        controllerAs: 'vm'
      })
      .when('/viewdetailminerals', {
        templateUrl: '/detailPage/mineralDetailPage.view.html',
        controller: 'mineralDetailPageCtrl',
        controllerAs: 'vm'
      })
      .when('/viewdetailrocks', {
        templateUrl: '/detailPage/rockDetailPage.view.html',
        controller: 'rockDetailPageCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
      
      // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }
  
  angular
    .module('rocks-minerals-app')
    .config(['$routeProvider', '$locationProvider', config]);

})();
