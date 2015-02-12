'use strict';

/**
 * @ngdoc function
 * @name someApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the someApp
 */
var myApp = angular.module('someApp');

myApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
