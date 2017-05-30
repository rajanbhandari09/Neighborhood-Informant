(function(angular){
	'use strict';
angular.module("affordableHousingService",[])
.factory("affordableHousingSearch",["$http",function affordableHousingSearch($http){

	var getRes = function () { 
	return $http.get('https://data.cityofchicago.org/resource/uahe-iimk.json');

}

return {
	getResponse: getRes
};

}]);
})(window.angular);



