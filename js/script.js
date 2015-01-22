angular.module("App", [])
 .controller("Controller", function($scope, $resource) {

  $resource.get("data/2015-1-1-15.json").success(function(data, status, headers, config){
	$scope.playlists = data;
	console.log(data);
  });
 });