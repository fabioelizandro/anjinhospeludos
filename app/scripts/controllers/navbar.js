'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('NavbarCtrl', ['$scope', '$location', '$state', 'Auth', 'API_DOMAIN', 'User', function ($scope, $location, $state, Auth, API_DOMAIN, User)
            {
                $scope.query = $location.search().query || '';
                $scope.user = Auth.getCurrentUser();
                $scope.API_DOMAIN = API_DOMAIN;
                $scope.$on('oauth:logout', function () {
                    $scope.user = {};
                });
                $scope.$on('oauth:login', function () {
                    $scope.user = User.get();
                });
                
                $scope.find = function () {
                    $location.search('query', $scope.query);
                    $location.path('/');
                    $state.reload();
                };
            }]);
