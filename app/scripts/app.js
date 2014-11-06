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
            'ngSanitize',
            'ngTouch',
            'ui.router',
            'ui.bootstrap',
            'oauth'
        ])
        .constant('API_DOMAIN', 'http://todas-as-patas.herokuapp.com')
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
                $stateProvider
                        .state('main', {
                            url: '/',
                            templateUrl: 'views/main.html',
                            controller: 'MainCtrl'
                        })
                        .state('oauth', {
                            url: '/access_token=:accessToken',
                            template: '',
                            controller: ['$location', 'AccessToken', function ($location, AccessToken) {
                                var hash = $location.path().substr(1);
                                AccessToken.setTokenFromString(hash);
                                $location.path('/');
                                $location.replace();
                            }]
                        })
                        .state('pet', {
                            url: '/pet/:id',
                            templateUrl: 'views/pet.html',
                            controller: 'PetCtrl'
                        })
                        .state('login', {
                            url: '/login',
                            templateUrl: 'views/login.html',
                            controller: 'LoginCtrl'
                        })
                        .state('signup', {
                            url: '/signup',
                            templateUrl: 'views/signup.html',
                            controller: 'SignupCtrl'
                        })
                        .state('settings', {
                            url: '/settings',
                            templateUrl: 'views/settings.html',
                            controller: 'SettingsCtrl',
                            authenticate: true
                        })
                        ;
                $urlRouterProvider.otherwise('/');
                $httpProvider.interceptors.push('authInterceptor');
            }])
        .factory('authInterceptor', ['$rootScope', '$q', '$cookieStore', '$location', function ($rootScope, $q, $cookieStore, $location) {
                return {
//                  Add authorization token to headers
                    request: function (config) {
                        config.headers = config.headers || {};
                        if ($cookieStore.get('token')) {
                            config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
                        }
                        return config;
                    },
//                  Intercept 401s and redirect you to login
                    responseError: function (response) {
                        if (response.status === 401) {
                            $location.path('/#/login');
//                      remove any stale tokens
                            $cookieStore.remove('token');
                            return $q.reject(response);
                        }
                        else {
                            return $q.reject(response);
                        }
                    }
                };
            }])
        .directive('disableAnimation', ['$animate', function ($animate) {
                return {
                    restrict: 'A',
                    link: function ($scope, $element, $attrs) {
                        $attrs.$observe('disableAnimation', function (value) {
                            $animate.enabled(!value, $element);
                        });
                    }
                };
            }])
        .run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
//              Redirect to login if route requires auth and you're not logged in
                $rootScope.$on('$stateChangeStart', function (event, next) {
                    Auth.isLoggedInAsync(function (loggedIn) {
                        if (next.authenticate && !loggedIn) {
                            $location.path('/#/login');
                        }
                    });
                });
            }]);

