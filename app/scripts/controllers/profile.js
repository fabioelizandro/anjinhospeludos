'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:FavoritepetCtrl
 * @description
 * # FavoritepetCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('ProfileCtrl', ['$scope', 'Auth', 'User', '$timeout', function ($scope, Auth, User, $timeout) {
                $scope.alerts = [];
                $scope.user = Auth.getCurrentUser();
                $scope.isLoggedIn = Auth.isLoggedIn;
                $scope.loader = false;

                $scope.updateProfile = function () {
                    var params = {
                        todasaspatas_apibundle_usercommon_api: {
                            username: $scope.user.username,
                            email: $scope.user.email,
                            firstName: $scope.user.firstName,
                            lastName: $scope.user.lastName,
                            phone: $scope.user.phone
                        }
                    };
                    
                    $scope.loader = true;
                    User.update(params, function (data) {
                        $scope.addAlert('success', 'Atualizado com sucesso!');
                        $scope.loader = false;
                    });
                };

                $scope.addAlert = function (type, message, time) {
                    $scope.alerts.push({type: type, message: message});
                    $timeout(function(){
                        $scope.removeAlert($scope.alerts.length - 1);
                    }, time || 2000);
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);
