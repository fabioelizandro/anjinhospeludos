'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('NavbarCtrl', ['$scope', '$location', '$route', function ($scope, $location, $route)
            {
                $scope.query = $location.search().query || '';
                
                $scope.find = function () {
                    $location.search('query', $scope.query);
                    $location.path('/');
                    $route.reload();
                };
            }]);
