(function()
{
	'use strict';

	var app = angular.module("myApp", [ "ngRoute" ]);

	app.config(function($routeProvider)
	{
		$routeProvider.when('/home',
		{
			templateUrl : 'components/home.htm'
		})
		.when('/diyFx',
		{
			templateUrl : 'components/diy-fx.htm'
		})
		.when('/music',
		{
			templateUrl : 'components/music.htm'
		})
		.when('/github',
		{
			templateUrl : 'components/github.htm'
		})
		.when('/impressum',
		{
			templateUrl : 'components/impressum.htm'
		})
		.when('/xgolf',
		{
		    templateUrl : 'components/xgolf/xgolf.htm',
		    controller : 'TestCtrl',
		})
		.otherwise(
		{
			redirectTo : '/home'
		});
	});
}).call(this);