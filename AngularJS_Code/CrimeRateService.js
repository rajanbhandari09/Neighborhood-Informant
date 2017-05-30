(function(angular){
    'use strict';
angular.module("crimeRateData",[])
.factory("crimeRateDataService",["$http",function($http){

var getResponse = function(){
//Crime Data API
return $http.get('https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=count(id),community_area&$group=community_area&$order=community_area ASC');

}

return {
getResponse: getResponse
}

}]);}
)(window.angular);