(function()
{
	'use strict';

	var app = angular.module("myApp", [ "ngRoute" ]);

	app.config(function($routeProvider)
	{
		$routeProvider.when('/home',
		{
			templateUrl : 'home.htm'
		})
		.when('/diyFx',
		{
			templateUrl : 'diy-fx.htm'
		})
		.when('/music',
		{
			templateUrl : 'music.htm'
		})
		.when('/github',
		{
			templateUrl : 'github.htm'
		})
		.when('/impressum',
		{
			templateUrl : 'impressum.htm'
		})
		.when('/xgolf',
		{
		    templateUrl : 'xgolf.htm',
		    controller : 'TestCtrl',
		})
		.otherwise(
		{
			redirectTo : '/home'
		});
	});
}).call(this);