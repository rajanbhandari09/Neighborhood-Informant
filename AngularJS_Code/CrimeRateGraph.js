(function(angular){
    'use strict';
angular.module('crimeRateGraph',['crimeRateData','chart.js'])
.controller("crimeRateGraphCtrl",["$scope","crimeRateDataService",function($scope,crimeRateDataService){

var label = [];
var total = [];

crimeRateDataService.getResponse().then(function(response){
    
angular.forEach(response.data,function(value,key){
	
label.push(value.community_area);
total.push(value.count_id);


    });

});

$scope.LabelsCommunityNumber = label;
$scope.dataCount = total;





}]

)})(window.angular);