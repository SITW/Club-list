'use strict';

angular.module('clubListApp')
  .controller('mainPage', function ($scope, Club, $routeParams) {
      $scope.club = Club.query({}, function(club) {
      });
  });

