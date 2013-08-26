'use strict';

/* Services */

angular.module('club', ['ngResource']).
  factory('Club', function($resource){
	  return $resource('data/club_result.json', {}, {
	    query: {method:'GET', isArray:true}
	  });
	});
