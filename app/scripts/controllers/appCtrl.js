/**
 * Created by Shtav on 2/11/15.
 */

var myApp = angular.module('someApp');

myApp.controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return (viewLocation === $location.path());
  };
}]);