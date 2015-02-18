'use strict';

/**
 * @ngdoc function
 * @name tgbooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tgbooksApp
 */
angular.module('tgbooksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
