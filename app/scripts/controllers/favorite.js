'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('FavoriteCtrl', ['$scope', 'Auth', 'User', function ($scope, Auth, User) {
                $scope.alerts = [];
                $scope.user = Auth.getCurrentUser();
                $scope.isLoggedIn = Auth.isLoggedIn;

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

                $scope.isFavorited = function(pet){
                    return _.find($scope.user.favoritePets, {id: pet.id});
                };

                $scope.removeFavoritePet = function (newPet) {
                    if (!$scope.isFavorited(newPet)) {
                        return;
                    }
                    newPet.favoritedLoader = true;
                    var params = {
                        todasaspatas_apibundle_favorite_pet: {
                            favoritePets: []
                        }
                    };

                    var pet = _.find($scope.user.favoritePets, {id: newPet.id});
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

                        newPet.favoritedLoader = undefined;
                        $scope.addAlert('success', 'Desfavoritado com sucesso!');
                    });
                };

            }]);
