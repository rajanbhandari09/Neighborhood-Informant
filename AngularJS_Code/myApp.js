(function(angular){
	'use strict';
var myModule = angular.module("myApp",["affordableHousingService"]);
myModule.controller("AffordableHousingController",["affordableHousingSearch", '$scope',function AffordableHousingController(affordableHousingSearch,$scope){
	$scope.limit = 5;
	 
affordableHousingSearch.getResponse().then(function (response){
	
console.log(response);
$scope.affordablehousingdata = response.data;
console.log($scope.affordablehousingdata);
});


	

}]);



})(window.angular);