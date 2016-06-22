(function()
{
	'use strict';

	var app = angular.module("myApp", [ "ngRoute" ]);

	app.config(function($routeProvider)
	{
		$routeProvider.when('/home',
		{
			templateUrl : './partials/home.htm'
		})
		.when('/diyFx',
		{
			templateUrl : './partials/diy-fx.htm'
		})
		.when('/music',
		{
			templateUrl : './partials/music.htm'
		})
		.when('/github',
		{
			templateUrl : './partials/github.htm'
		})
		.when('/impressum',
		{
			templateUrl : './partials/impressum.htm'
		})
		.when('/xgolf',
		{
		    templateUrl : './partials/xgolf.htm',
		    controller : 'TestCtrl',
		})
		.otherwise(
		{
			redirectTo : '/home'
		});
	});
}).call(this);