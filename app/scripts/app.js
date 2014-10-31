'use strict';

/**
 * @ngdoc overview
 * @name todasAsPatasApp
 * @description
 * # todasAsPatasApp
 *
 * Main module of the application.
 */
angular
<<<<<<< HEAD
        .module('todasAsPatasApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .constant('API_DOMAIN', 'http://todas-as-patas.herokuapp.com')
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
                    .otherwise({
                        redirectTo: '/'
                    });
        });
=======
  .module('todasAsPatasApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
>>>>>>> 08036cf9c3d4dca86fec89e56515b969a7569a69
