// (function(){
//     angular
//         .module('rocks-minerals-app')
//         .service('Google', google);
        
//         google.$inject = ['$http'];
        
//         function google($http){
//             var getImage = function(searchTerm){
//                 return $http.get('/api/googleapi' + '/' + searchTerm);
//             };
            
//             return {
//                 getImage: getImage(),
//             };
//         }
// })();

// 'use strict';
(function(){
    angular
        .module('rocks-minerals-app')
        .service('Google', google);
        
        google.$inject = ['$http'];
        
        function google ($http) {
        return {
            getCustomSearchResults: function (search_term, result_count) {
                var urlBase = '/customsearch',
                    callbackName = 'JSON_CALLBACK',
                    url = urlBase + '/' + search_term + '/' + result_count + '?callback=' + callbackName;

                return $http.jsonp(url);
            }
        };
    }
});