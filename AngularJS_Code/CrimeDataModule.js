var app = angular.module("CrimeDataModule", ["CrimeDataServiceModule",,"CommunityNameToNumberConversionModule"]);
app.controller("searchController",['$scope','$http', 'CrimeDataService', 'CommunityNameToNumberConversionService', function($scope,$http,CrimeDataService,CommunityNameToNumberConversionService){
    
    $scope.search = function () {

var searchQuery;


if($scope.selectedOption=='community_area_number'){
	searchQuery = 'community_area='+$scope.searchParameterValue;
	CrimeDataService.getResponse(searchQuery).then(function successCallback(response){
		console.log(response.data)
		if(response.data.length==0){
			$scope.searchdata = [];
			$scope.selection = {
		criteria: "community area number",
		inputValue: "Invalid input"
	}
		}

else{
	$scope.searchdata = response.data;
	$scope.selection = {
		criteria: "community area number",
		inputValue: $scope.searchParameterValue
	}

}
		}
);
	
}

else if ($scope.selectedOption=='community_area_name') {
	CommunityNameToNumberConversionService.getResponse($scope.searchParameterValue).then(function successCallback(response){

		if(response.data.length==0||response.data[0]['community_area_number']===undefined){
			$scope.searchdata = [];
			$scope.selection = {
		criteria: "community area name",
		inputValue: "Invalid input"
	}
		}

		else{
		console.log(response.data[0]['community_area_number'])
		var communityAreaNumber = response.data[0]['community_area_number'];
		$scope.searchParameterValue = response.data[0]['community_area'];
		

		searchQuery = 'community_area=' + communityAreaNumber;
		CrimeDataService.getResponse(searchQuery).then(function(response){
			$scope.searchdata = response.data;
	$scope.selection = {
		criteria: "community area name",
		inputValue: $scope.searchParameterValue
	}
});
}


	
});
	
}

else{
	searchQuery = 'year=' + $scope.searchParameterValue;
	CrimeDataService.getResponse(searchQuery).then(function(response){
		if(response.data.length==0){
			$scope.searchdata=[];
$scope.selection = {
		criteria: "year",
		inputValue: "Invalid input"
	}

		}
			else{
	$scope.searchdata = response.data;
	$scope.selection = {
		criteria: "year",
		inputValue: $scope.searchParameterValue
	}
}
});
	
}

    	

    }
}]);