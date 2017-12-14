// (function() {
//     angular
//         .module('rocks-minerals-app')
//         .controller('googleCtrl', googleCtrl);
        
//         googleCtrl.$inject = ['$scope', 'Google'];
        
//         function googleCtrl($scope, Google){
//             var vm = this;
//             console.log(window.location);
            
//             vm.content = "Google Image Search";
            
//             vm.getGoogleImage = function(){
//                 var searchTerm = vm.searchTerm
//                 console.log(searchTerm);
//             }
            
//             vm.getGoogleImage();

//         }
        
// })

// 'use strict';

/* jshint -W098 */
(function(){
angular
    .module('rocks-minerals-app')
    .controller('GoogleCtrl', GoogleCtrl);
    
    GoogleCtrl.$inject = ['$scope', 'Global', 'Search']
    
    function GoogleCtrl ($scope, Global, Search) {
        $scope.global = Global;
        $scope.package = {
            name: 'search'
        };
        $scope.customSearchResults = {};
        $scope.search_term = '';
        $scope.result_count = 10;
        $scope.submit = function () {
            $scope.search_term = $scope.search_term.trim();
            if ($scope.search_term) { // if input is not blank...
                Search.getCustomSearchResults($scope.search_term, $scope.result_count)
                    .then(function (results) {
                        $scope.customSearchResults = results.data.items;
                    });
            }
        };
    }
});
