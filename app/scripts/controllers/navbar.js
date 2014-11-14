'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('NavbarCtrl', ['$scope', '$location', '$state', 'Auth', 'API_DOMAIN', 'CLIENT_ID', 'User', function ($scope, $location, $state, Auth, API_DOMAIN, CLIENT_ID, User)
            {
                $scope.isCollapsed = false;
                $scope.query = $location.search().query || '';
                $scope.user = Auth.getCurrentUser();
                $scope.API_DOMAIN = API_DOMAIN;
                $scope.CLIENT_ID = CLIENT_ID;
                $scope.hasFilter = $state.current.name === 'main';
                $scope.CLIENT_DOMAIN = $location.protocol()+'://'+$location.host()+(($location.port())? (':'+$location.port()) : '');
                
                $scope.$on('$stateChangeSuccess', function () {
                    $scope.hasFilter = $state.current.name === 'main';
                });
                
                $scope.$on('oauth:logout', function () {
                    $scope.user = {};
                });
                $scope.$on('oauth:login', function () {
                    $scope.user = User.get();
                });

                $scope.find = function () {
                    $scope.isCollapsed = false;
                    $state.go('main', {query: $scope.query});
                };
                
                $scope.$on('$stateChangeSuccess', function () {
                    $scope.query = $location.search().query || '';
                });
                
                $scope.closeNav = function(){
                    if($scope.isCollapsed === true){
                        $scope.isCollapsed = false;
                    }
                };
                
            }]);
