(function(){
    angular
        .module('rocks-minerals-app')
        .service('Flickr', flickr);
        
        flickr.$inject = ['$http'];
        
        function flickr($http){
            var getFlickrImage = function(searchTerm){
                return $http.get('/api/flickrapi' + '/' + searchTerm);
            };
            
            return {
                getFlickrImage: getFlickrImage(),
            };
        }
})();