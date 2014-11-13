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
            'app.oauth',
            'wu.masonry'
        ])
//        .constant('API_DOMAIN', 'http://todas-as-patas.herokuapp.com')
//        .constant('CLIENT_ID', '1_2hp5nnndor6ss4kwwosgcswc0g8wgw8ck4wggo8g8os4ggck4w')
        .constant('CLIENT_ID', '1_1ohgofnq0nogkcccc8cs8w4ok44w08gk4wok8owook088w8gs4')
        .constant('API_DOMAIN', 'http://localhost/todas-as-patas/web/app_dev.php')
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', 'AccessTokenProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, AccessTokenProvider) {
                $stateProvider
                        .state('main', {
                            url: '/?query',
                            templateUrl: 'views/main.html',
                            controller: 'MainCtrl'
                        })
                        .state('profile', {
                            url: '/perfil',
                            templateUrl: 'views/profile.html',
                            controller: 'ProfileCtrl',
                            authenticate: true
                        })
                        .state('text', {
                            url: '/text/:type',
                            templateUrl: 'views/text.html',
                            controller: 'TextCtrl',
                            authenticate: false
                        })
                        .state('questionMessage', {
                            url: '/perguntas',
                            templateUrl: 'views/questionmessage.html',
                            controller: 'QuestionMessageCtrl',
                            authenticate: true
                        })
                        .state('adoptionMessage', {
                            url: '/adocoes',
                            templateUrl: 'views/adoptionmessage.html',
                            controller: 'AdoptionMessageCtrl',
                            authenticate: true
                        })
                        .state('favorite', {
                            url: '/favoritos',
                            templateUrl: 'views/favorite.html',
                            controller: 'FavoriteCtrl'
                        })
                        .state('petListener', {
                            url: '/ouvintes',
                            templateUrl: 'views/petListener.html',
                            controller: 'PetListenerCtrl',
                            authenticate: true
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
                        .state('organization', {
                            url: '/organizacoes',
                            templateUrl: 'views/organization.html',
                            controller: 'OrganizationCtrl'
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
                            AccessToken.destroy();
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
        .run(['$rootScope', 'Endpoint', 'Auth', 'AccessToken', '$window', '$location', 'User', '$state', function ($rootScope, Endpoint, Auth, AccessToken, $window, $location, User, $state) {

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
