'use strict';

/**
 * @ngdoc function
 * @name someApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the someApp
 */
angular.module('someApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
