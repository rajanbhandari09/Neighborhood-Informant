(function(angular){
    'use strict';
angular.module("DisplayChartsServiceModule",[])
.factory("DisplayChartsService",["$http",function($http){


//Community Area with crime count chart
var getResponseCommunityAreaCount = function(){

return $http.get(' https://data.cityofchicago.org/resource/uahe-iimk.json?$select=community_area,COUNT(community_area) AS COUNT&$group=community_area');

}


//Year with crime count chart

var getResponseYearCrimeCount = function(){

return $http.get('https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=year,COUNT(1) AS count&$group=year');

}

//For a given communityAreaNumber, get data for crime counts for every year
var getResponseCommunityAreaCrimeCountForAllYears = function(communityAreaNumber){
	return $http.get('https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=year,COUNT(1) AS count&$where=community_area="'+communityAreaNumber+'"&$group=year&$order=year');
}

//For a given communityAreaNumber, given year, get data for crrime counts for different types

var getResponseCommunityAreaCrimeCountForDifferentTypesInGivenYear = function(communityAreaNumber,year){
	return $http.get('https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=year,primary_type,COUNT(1) AS count&$where=community_area="'+communityAreaNumber+'"&year='+year+'&$group=year,primary_type&$order=year,primary_type');
}

var getResponseCommunityAreaPropertTypesWithCounts = function(communityAreaName){
return $http.get('https://data.cityofchicago.org/resource/uahe-iimk.json?$select=community_area,property_type,SUM(units) AS count&$group=community_area,property_type&$order=community_area,property_type&$where=community_area="'+communityAreaName+'"');




}
return {
getResponseCommunityAreaCount: getResponseCommunityAreaCount,
getResponseYearCrimeCount: getResponseYearCrimeCount,
getResponseCommunityAreaCrimeCountForAllYears: getResponseCommunityAreaCrimeCountForAllYears,
getResponseCommunityAreaCrimeCountForDifferentTypesInGivenYear: getResponseCommunityAreaCrimeCountForDifferentTypesInGivenYear,
getResponseCommunityAreaPropertTypesWithCounts: getResponseCommunityAreaPropertTypesWithCounts
}

}]);}
)(window.angular);