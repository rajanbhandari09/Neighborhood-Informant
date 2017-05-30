var app = angular.module('CommunityNameToNumberConversionModule',[]);
app.factory('CommunityNameToNumberConversionService',['$http', function($http){

var getResponse = function(communityName){
console.log(communityName);

	return $http.get('https://data.cityofchicago.org/resource/uahe-iimk.json?$select=distinct(community_area_number) as community_area_number,community_area&$where=upper(community_area) like \'%25' + communityName.toUpperCase() + '%25\'');

}

return {

	getResponse:getResponse
}

}]);