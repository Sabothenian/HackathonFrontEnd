'use strict';

/**
 * @ngdoc overview
 * @name supportAnalyticsApp
 * @description
 * # supportAnalyticsApp
 *
 * Main module of the application.
 */
angular
  .module('supportAnalyticsApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/product', {
            templateUrl: 'views/product.html',
            controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
