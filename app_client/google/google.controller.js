(function() {
    angular
        .module('rocks-minerals-app')
        .controller('googleCtrl', googleCtrl);
        
        googleCtrl.$inject = ['$scope', 'Google'];
        
        function googleCtrl($scope, Google){
            var vm = this;
            console.log(window.location);
            
            vm.content = "Google Image Search";
            
            vm.getGoogleImage = function(){
                var searchTerm = vm.searchTerm
                console.log(searchTerm);
            }
            
            vm.getGoogleImage();

        }
        
})