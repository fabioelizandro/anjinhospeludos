'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('QuestionMessageCtrl', ['$scope', 'Auth', 'QuestionMessage', function ($scope, Auth, QuestionMessage) {
                $scope.alerts = [];
                $scope.user = Auth.getCurrentUser();
                $scope.questions = QuestionMessage.query();
                

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);
