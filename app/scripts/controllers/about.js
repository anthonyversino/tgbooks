'use strict';

/**
 * @ngdoc function
 * @name tgbooksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tgbooksApp
 */
angular.module('tgbooksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
