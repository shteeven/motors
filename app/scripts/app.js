'use strict';

/**
 * @ngdoc overview
 * @name someApp
 * @description
 * # someApp
 *
 * Main module of the application.
 */
var myApp = angular.module('someApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/info', {
      templateUrl: 'views/info.html',
      controller: 'InfoCtrl'
    })
    .when('/inventory', {
      templateUrl: 'views/inventory.html',
      controller: 'InventoryCtrl'
    }).when('/autodestruction', {
      templateUrl: 'views/autodestruction.html',
      controller: 'AutodestructionCtrl'
    }).when('/englishnavigation', {
      templateUrl: 'views/englishnavigation.html',
      controller: 'EnglishnavigationCtrl'
    }).when('/gallery', {
      templateUrl: 'views/gallery.html',
      controller: 'GalleryCtrl'
    }).when('/forsalebyowners', {
      templateUrl: 'views/forsalebyowners.html',
      controller: 'ForsalebyownersCtrl'
    }).otherwise({
      redirectTo: '/'
    });
});


