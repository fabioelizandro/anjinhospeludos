'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:FavoritepetCtrl
 * @description
 * # FavoritepetCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('PetListenerCtrl', ['$scope', 'Auth', 'PetListener', 'Enum', 'Breed', function ($scope, Auth, PetListener, Enum, Breed) {
                $scope.alerts = [];
                $scope.user = Auth.getCurrentUser();
                $scope.isLoggedIn = Auth.isLoggedIn;
                $scope.petListeners = PetListener.query();
                $scope.loader = false;
                $scope.enums = Enum.get();
                $scope.breeds = [];
                $scope.newPetListener = {
                    typeId: 1, 
                    genderId: 1, 
                    sizeId: 1, 
                    ageId: 1
                };

                $scope.createPetListener = function () {
                    var newPetListener = angular.copy($scope.newPetListener);
                    $scope.loader = true;
                    var params = {
                        todasaspatas_apibundle_petlistener: newPetListener
                    };

                    PetListener.save(params, function (data) {
                        $scope.loader = false;
                        $scope.addAlert('success', 'Ouvinte criado com sucesso');
                        $scope.petListeners.push(data);
                    }, function () {
                        $scope.loader = false;
                        $scope.addAlert('error', 'Não foi possível criar o ouvinte, tente mais tarde!');
                    });
                };

                $scope.removePetListener = function (index) {
                    $scope.petListeners[index].loader = true;

                    PetListener.delete({id: $scope.petListeners[index].id}, function () {
                        $scope.addAlert('success', 'Ouvinte deletado com sucesso');
                        $scope.petListeners.splice(index, 1);
                    }, function () {
                        $scope.petListeners[index].loader = undefined;
                        $scope.addAlert('error', 'Não foi possível deletar o ouvinte, tente mais tarde!');
                    });
                };

                $scope.updateBreeds = function () {
                    $scope.breeds = [];
                    $scope.newPetListener.breeds = [];
                    
                    if ($scope.newPetListener.typeId === null) {
                        return;
                    }
                    
                    Breed.query({id: $scope.newPetListener.typeId}, function(data){
                        $scope.breeds = data;
                        if ($scope.breeds.length > 0) {
                            $scope.newPetListener.breeds = [$scope.breeds[0].id];
                        }
                    });
                };

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };
                
                /**
                 * Init
                 */
                $scope.updateBreeds();

            }]);
