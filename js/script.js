	var app = angular.module("App", [])

	app.controller("Controller", function($scope, $http, $filter) {
		$http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json").success(function(data){
		var orderBy = $filter("orderBy");
		$scope.playlists = data.tracks.track;
		console.log($scope.playlists)
		$scope.order = function(predicate, reverse) {
			$scope.playlists = orderBy($scope.playlists, predicate, reverse);

			};
		});

	});
