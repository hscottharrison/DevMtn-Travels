angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){



   var packages = mainSrv.packageInfo;
   $scope.packages = [];
   for(var i = 0; i < packages.length; i++){
     if(packages[i].country === $stateParams.country){
       $scope.packages.push(packages[i]);
     }
   }


});
