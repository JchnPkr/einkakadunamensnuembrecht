(function () {
  'use strict';

  var app = angular.module('myApp', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'components/home.htm',
      })
      .when('/diyFx', {
        templateUrl: 'components/diy-fx.htm',
      })
      .when('/music', {
        templateUrl: 'components/music.htm',
      })
      .when('/github', {
        templateUrl: 'components/github.htm',
      })
      .when('/impressum', {
        templateUrl: 'components/impressum.htm',
      })
      .when('/guestbook', {
        templateUrl: 'components/guestbook/guestbook.htm',
        controller: 'CommentCtrl',
      })
      .otherwise({
        redirectTo: '/home',
      });
  });
}).call(this);
