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
        .module('todasAsPatasApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap'
        ])
        .constant('API_DOMAIN', 'http://todas-as-patas.herokuapp.com')
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl',
                        reloadOnSearch: false
                    })
                    .when('/:id', {
                        templateUrl: 'views/pet.html',
                        controller: 'PetCtrl',
                        reloadOnSearch: false
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl',
                        reloadOnSearch: false
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
//            $locationProvider.html5Mode(true);
        });

