app.controller("MainController", ['$scope', function($scope) {
  $scope.title = "Timer";

  $scope.count = 150000;

  

  $scope.start = function() {
    counting = true;
    console.log(counting);
  }

  $scope.stop = function() {
    counting = false;
    console.log(counting);
  }


}]);
