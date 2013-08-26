'use strict';
//'majorClub'
angular.module('clubListApp', ['club'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/clubList.html',
        controller: 'mainPage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
