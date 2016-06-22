angular.module('myApp').controller('UpdateCtrl', function($scope, $http)
{
	$http.get("./data/updates.json").success(function(res)
	{
		$scope.updates = res;
	});
});