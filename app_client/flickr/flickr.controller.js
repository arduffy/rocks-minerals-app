(function() {
    angular
        .module('rocks-minerals-app')
        .controller('flickrCtrl', flickrCtrl);
        
        flickrCtrl.$inject = ['$scope', 'SelectedData' 'Flickr'];
        
        function flickrCtrl($scope, Flickr){
            var vm = this;
            console.log(window.location);
            
            vm.content = "Flickr Search";
            
            vm.selectedRock = "";
            vm.selectedMineral = "";
            
            if (SelectedData.selectedRock !== null){
                vm.selectedRock = SelectedData.selectedRock;
            }
            
            if(SelectedData.selectedMineral !== null){
                vm.selectedMineral = SelectedData.selectedMineral;
            }
            
            vm.getFlickrImage = function(){
                var searchTerm = vm.selectedRock.name;
                console.log(name);
            }
        }
})