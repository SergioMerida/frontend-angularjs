describe('lastFm module', function() {
	beforeEach(module('lastFm'));

	var $controller;
	beforeEach(inject(function(_$controller_){
	// The injector unwraps the underscores (_) from around the parameter names when matching
	$controller = _$controller_;
	}));
	describe('getData controller', function() {
		it("Should watch if the $scope it's not empty", function() {
			var $scope = {};
			var controller = $controller('getData', { $scope: $scope });
			var playlist = $scope.playlists
			expect(playlist).not.toBe('');
		});
	});
});