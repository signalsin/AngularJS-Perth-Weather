app.directive('forecastInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      day: '=' 
    }, 
    templateUrl: 'Directives/forecastInfo.html' 
  }; 
});
