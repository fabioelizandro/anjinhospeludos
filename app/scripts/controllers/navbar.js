'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('NavbarCtrl', ['$scope', '$location', '$state', function ($scope, $location, $state)
            {
                $scope.query = $location.search().query || '';
                
                $scope.find = function () {
                    $location.search('query', $scope.query);
                    $location.path('/');
                    $state.reload();
                };
            }]);
