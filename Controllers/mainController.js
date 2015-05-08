app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  
    $scope.title="5 Day Forecast";
    $scope.loadData= function() {
          forecast.success(function(data) {
  	$scope.forecast = data;
  });
    }
    
    //Initial load
    $scope.loadData();
    

}]);