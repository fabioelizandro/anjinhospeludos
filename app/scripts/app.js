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
            'app.oauth'
        ])
        .constant('API_DOMAIN', 'http://todas-as-patas.herokuapp.com')
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', 'AccessTokenProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, AccessTokenProvider) {
                $stateProvider
                        .state('main', {
                            url: '/',
                            templateUrl: 'views/main.html',
                            controller: 'MainCtrl'
                        })
                        .state('oauth', {
                            url: '/access_token=:accessToken',
                            template: '',
                            controller: ['$location', 'AccessToken', '$state', '$timeout', function ($location, AccessToken, $state, $timeout) {
                                    var hash = $location.path().substr(1);
                                    AccessToken.setTokenFromString(hash);
                                    $timeout(function () {
                                        $state.transitionTo('main', {}, {
                                            reload: true,
                                            inherit: false,
                                            notify: true
                                        });
                                    });
                                }]
                        })
                        .state('pet', {
                            url: '/pet/:id',
                            templateUrl: 'views/pet.html',
                            controller: 'PetCtrl'
                        })
                        ;
                $urlRouterProvider.otherwise('/');
                $httpProvider.interceptors.push('authInterceptor');
            }])
        .factory('authInterceptor', ['$rootScope', '$q', 'AccessToken', '$location', 'Endpoint', function ($rootScope, $q, AccessToken, $location, Endpoint) {
                return {
//                  Add authorization token to headers
                    request: function (config) {
                        config.headers = config.headers || {};
                        if (AccessToken.get()) {
                            config.headers.Authorization = 'Bearer ' + AccessToken.get().access_token;
                        }
                        return config;
                    },
//                  Intercept 401s and redirect you to login
                    responseError: function (response) {
                        if (response.status === 401) {
                            Endpoint.redirect();
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
        .run(['$rootScope', 'Endpoint', 'Auth', 'AccessToken', '$window', '$location', 'User', function ($rootScope, Endpoint, Auth, AccessToken, $window, $location, User) {
                
                $rootScope.$on('oauth:logout', function () {
                    Auth.setCurrentUser({});
                });
                $rootScope.$on('oauth:login', function () {
                    Auth.setCurrentUser(User.get());
                });
                
                
//              Workaround para resolver problemas de compatibilidade com plygins que utilizam 
//              o evento de troca do ngRoute
                $rootScope.$on('$stateChangeSuccess', function () {
                    $rootScope.$broadcast('$routeChangeSuccess');
                });

//              Redirect to login if route requires auth and you're not logged in
                $rootScope.$on('$stateChangeStart', function (event, next) {
                    Auth.isLoggedInAsync(function (loggedIn) {
                        if (next.authenticate && !loggedIn) {
                            Endpoint.redirect();
                        }
                    });
                });
            }]);

