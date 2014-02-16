'use strict';

angular.module('marvelFrontEndApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainCharacters.html',
        controller: 'MainCharactersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
