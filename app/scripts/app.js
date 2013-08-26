'use strict';
//'majorClub'
angular.module('clubListApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainPage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
