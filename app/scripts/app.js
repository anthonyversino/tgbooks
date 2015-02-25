/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name tgbooksApp
 * @description
 * # tgbooksApp
 *
 * Main module of the application.
 */
var app = angular
  .module('tgbooksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
