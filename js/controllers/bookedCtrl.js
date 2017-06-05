angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

  console.log($stateParams)

  var packages = mainSrv.packageInfo
  console.log(packages)
  for(var i = 0; i < packages.length; i++){
      if(packages[i].id == $stateParams.id){
        $scope.prop = packages[i];
        console.log($scope.prop)
    }
  }



})
