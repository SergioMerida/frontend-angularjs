	
	var lastFm = angular.module("lastFm", [])

	lastFm.filter("soloUrl", function(){
		return function(item){
			return (JSON.stringify(item)).slice(10,-18);
		};
	});

	lastFm.controller("getData", function($scope, $http, $filter) {
		$http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json").success(function(data){
		var orderBy = $filter("orderBy");
		$scope.playlists = data.tracks.track;
		
		/*Order by*/
		$scope.order = function(predicate, reverse) {
			$scope.playlists = orderBy($scope.playlists, predicate, reverse);

			};
		});

	});
