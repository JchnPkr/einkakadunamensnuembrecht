angular.module('myApp').controller('UpdateCtrl', function($scope, $http)
{
	$http.get("assets/data/updates.json").success(function(res)
	{
		$scope.updates = res;
	});
});