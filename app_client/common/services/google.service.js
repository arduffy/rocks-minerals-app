(function(){
    angular
        .module('rocks-minerals-app')
        .service('Google', google);
        
        google.$inject = ['$http'];
        
        function google($http){
            var getImage = function(searchTerm){
                return $http.get('/api/googleapi' + '/' + searchTerm);
            };
            
            return {
                getImage: getImage(),
            };
        }
})();