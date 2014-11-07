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

                $scope.isFavorited = function () {
                    return _.find($scope.user.favoritePets, {id: $scope.pet.id});
                };

                $scope.removeFavoritePet = function () {
                    if (!$scope.isFavorited()) {
                        return;
                    }
                    $scope.pet.favoritedLoader = true;
                    var params = {
                        todasaspatas_apibundle_favorite_pet: {
                            favoritePets: []
                        }
                    };

                    var pet = _.find($scope.user.favoritePets, {id: $scope.pet.id});
                    var index = $scope.user.favoritePets.indexOf(pet);
                    $scope.user.favoritePets.splice(index, 1);
                    angular.forEach($scope.user.favoritePets, function (pet, index) {
                        params.todasaspatas_apibundle_favorite_pet.favoritePets[index] = pet.id;
                    });
                    User.updatePets(params, function (data) {
                        var pets = [];
                        angular.forEach(data.favoritePets, function (value) {
                            pets.push(value);
                        });
                        data.favoritePets = pets;

                        $scope.pet.favoritedLoader = undefined;
                        $scope.user = data;
                        $scope.addAlert('success', 'Desfavoritado com sucesso!');
                    });
                };

                $scope.addFavoritePet = function () {
                    if ($scope.isFavorited()) {
                        return;
                    }
                    $scope.pet.favoritedLoader = true;
                    var params = {
                        todasaspatas_apibundle_favorite_pet: {
                            favoritePets: []
                        }
                    };

                    $scope.user.favoritePets.push(angular.copy($scope.pet));
                    angular.forEach($scope.user.favoritePets, function (pet, index) {
                        params.todasaspatas_apibundle_favorite_pet.favoritePets[index] = pet.id;
                    });
                    User.updatePets(params, function (data) {
                        $scope.pet.favoritedLoader = undefined;
                        $scope.user = data;
                        $scope.addAlert('success', 'Favoritado com sucesso!');
                    });
                };
            }]);
