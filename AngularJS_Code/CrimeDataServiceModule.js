var app = angular.module('CrimeDataServiceModule',[]);
app.factory('CrimeDataService',['$http', function($http){

var getResponse = function(searchQuery){
console.log(searchQuery);
	return $http.get('https://data.cityofchicago.org/resource/6zsd-86xi.json?'+searchQuery);
}

return {

	getResponse:getResponse
}

}]);