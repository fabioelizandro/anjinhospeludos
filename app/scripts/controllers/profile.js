'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:FavoritepetCtrl
 * @description
 * # FavoritepetCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('ProfileCtrl', ['$scope', 'Auth', 'User', function ($scope, Auth, User) {
                $scope.alerts = [];
                $scope.user = Auth.getCurrentUser();
                $scope.isLoggedIn = Auth.isLoggedIn;

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);
