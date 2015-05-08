app.factory('forecast', ['$http', function($http) {
	return $http.get("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20woeid%3D%221098081%22%20and%20u%3D%22c%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
        
    
    
    
}]);