var app = angular.module('DisplayChartsModule',['DisplayChartsServiceModule','chart.js','CommunityNameToNumberConversionModule']);
app.controller('chartController',['$scope','DisplayChartsService','CommunityNameToNumberConversionService',function($scope,DisplayChartsService,CommunityNameToNumberConversionService){

/*//Community Area with Crime Count Graph
var community_names = [];
var counts = [];

DisplayChartsService.getResponseCommunityAreaCount().then(function(response){
    
angular.forEach(response.data,function(value,key){
	console.log(value.community_area);
community_names.push(value.community_area);
counts.push(value.COUNT);


    });

});

$scope.LabelsCommunityName = community_names;
$scope.dataCount = counts;


//Year with Crime count Graph

var years = [];
var Crimecounts = [];

DisplayChartsService.getResponseYearCrimeCount().then(function(response){
    
angular.forEach(response.data,function(value,key){
	console.log(value.year);
years.push(value.year);
Crimecounts.push(value.count);


    });

});

$scope.dataCrimeCount = Crimecounts;
$scope.LabelsYears = years;*/


//Year with Crime count Graph for a community area

$scope.search = function(){
var communityCrimeCounts = [];
var communityCrimeCountYears = [];
CommunityNameToNumberConversionService.getResponse($scope.community_area_name_graph_1).then(function(response){
var communityAreaNumber = response.data[0]['community_area_number'];
console.log(communityAreaNumber);
DisplayChartsService.getResponseCommunityAreaCrimeCountForAllYears(communityAreaNumber).then(function(response){
angular.forEach(response.data,function(value,key){
	console.log(value.year);
	communityCrimeCountYears.push(value.year);
	communityCrimeCounts.push(value.count);


}
	);


});

});


$scope.communityAreaLabelsYears = communityCrimeCountYears;
$scope.dataCrimeCountForCommunityArea = communityCrimeCounts;


//chart for displaying property types for a given community area
var communityAreaPropertyTypes = [];
var communityAreaPropertyTypesCounts = [];

DisplayChartsService.getResponseCommunityAreaPropertTypesWithCounts($scope.community_area_name_graph_1).then(function(response){
angular.forEach(response.data,function(value,key){
communityAreaPropertyTypes.push(value.property_type);
communityAreaPropertyTypesCounts.push(value.count);

}




	);

});
$scope.dataPropertyCountsForPropertyTypes = communityAreaPropertyTypesCounts;
$scope.communityAreaPropertyTypes = communityAreaPropertyTypes;
}

//Crimetypes count for a given community area in a given year

$scope.searchCrimeCountForGivenCommunityForGivenYear = function(){
var communityCrimeCountsForGivenYear = [];
var communityCrimeTypesForGivenYear = [];
CommunityNameToNumberConversionService.getResponse($scope.community_area_name_graph_2).then(function(response){
var communityAreaNumber = response.data[0]['community_area_number'];
console.log(communityAreaNumber);
DisplayChartsService.getResponseCommunityAreaCrimeCountForDifferentTypesInGivenYear(communityAreaNumber,$scope.year).then(function(response){
angular.forEach(response.data,function(value,key){
communityCrimeCountsForGivenYear.push(value.count);
communityCrimeTypesForGivenYear.push(value.primary_type);


});

});
});

$scope.dataCrimeCountForCommunityAreaForGivenYear = communityCrimeCountsForGivenYear;
$scope.communityAreaCrimeTypes = communityCrimeTypesForGivenYear;

}


}]);