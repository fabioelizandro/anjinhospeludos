'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('AdoptionMessageCtrl', ['$scope', 'Auth', 'AdoptionMessage', function ($scope, Auth, AdoptionMessage) {
                $scope.alerts = [];
                $scope.user = Auth.getCurrentUser();
                $scope.adoptions = AdoptionMessage.query();
                

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);
