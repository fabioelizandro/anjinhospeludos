'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:PetCtrl
 * @description
 * # PetCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('PetCtrl', ['$scope', '$stateParams', 'Pet', 'Auth', 'User', '$modal', 'QuestionMessage', 'AdoptionMessage', function ($scope, $stateParams, Pet, Auth, User, $modal, QuestionMessage, AdoptionMessage) {
                $scope.alerts = [];
                $scope.pet = Pet.get({id: $stateParams.id});
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
                        'todasaspatas_apibundle_favorite_pet': {
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
                        $scope.addAlert('success', 'Desfavoritado com sucesso!');
                    });
                };

                $scope.addFavoritePet = function () {
                    if ($scope.isFavorited()) {
                        return;
                    }
                    $scope.pet.favoritedLoader = true;
                    var params = {
                        'todasaspatas_apibundle_favorite_pet': {
                            favoritePets: []
                        }
                    };

                    $scope.user.favoritePets.push(angular.copy($scope.pet));
                    angular.forEach($scope.user.favoritePets, function (pet, index) {
                        params.todasaspatas_apibundle_favorite_pet.favoritePets[index] = pet.id;
                    });
                    User.updatePets(params, function (data) {
                        $scope.pet.favoritedLoader = undefined;
                        $scope.addAlert('success', 'Favoritado com sucesso!');
                    });
                };


                $scope.openAdoption = function () {

                    var modalInstance = $modal.open({
                        templateUrl: 'adoptionModal.html',
                        controller: 'SendAdoptionRequestModalCtrl',
                        resolve: {
                            pet: function () {
                                return $scope.pet;
                            },
                            user: function () {
                                return $scope.user;
                            },
                            AdoptionMessage: function () {
                                return AdoptionMessage;
                            }
                        }
                    });

                    modalInstance.result.then(function () {

                    }, function () {

                    });
                };
                $scope.openQuestion = function () {

                    var modalInstance = $modal.open({
                        templateUrl: 'questionModal.html',
                        controller: 'SendQuestionModalCtrl',
                        resolve: {
                            pet: function () {
                                return $scope.pet;
                            },
                            user: function () {
                                return $scope.user;
                            },
                            QuestionMessage: function () {
                                return QuestionMessage;
                            }
                        }
                    });

                    modalInstance.result.then(function () {

                    }, function () {

                    });
                };

            }])
        .controller('SendAdoptionRequestModalCtrl', ['$scope', '$modalInstance', 'pet', 'user', 'AdoptionMessage', function ($scope, $modalInstance, pet, user, AdoptionMessage) {

                $scope.pet = pet;
                $scope.user = user;
                $scope.message = null;
                $scope.subject = null;
                $scope.alerts = [];
                $scope.sended = false;
                $scope.sending = false;

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

                $scope.send = function () {
                    var params = {
                        todasaspatas_apibundle_adoptionrequestmessage: {
                            title: angular.copy($scope.subject),
                            message: angular.copy($scope.message),
                            pet: $scope.pet.id
                        }
                    };

                    $scope.sending = true;

                    AdoptionMessage.save(params, function () {
                        $scope.sended = true;
                        $scope.sending = false;
                        $scope.addAlert('success', 'Solicitação de adoção realizada com sucesso, entraremos em contato em breve!');

                    }, function () {
                        $scope.sending = true;
                        $scope.addAlert('danger', 'Ocorreu um erro ao enviar a solicitação de adoção, por favor tente mais tarde!');
                    });

                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }])
        .controller('SendQuestionModalCtrl', ['$scope', '$modalInstance', 'pet', 'user', 'QuestionMessage', function ($scope, $modalInstance, pet, user, QuestionMessage) {

                $scope.pet = pet;
                $scope.user = user;
                $scope.message = null;
                $scope.subject = null;
                $scope.alerts = [];
                $scope.sended = false;
                $scope.sending = false;

                $scope.addAlert = function (type, message) {
                    $scope.alerts.push({type: type, message: message});
                };

                $scope.removeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

                $scope.send = function () {
                    var params = {
                        todasaspatas_apibundle_questionmessage: {
                            title: angular.copy($scope.subject),
                            message: angular.copy($scope.message),
                            pet: $scope.pet.id
                        }
                    };

                    $scope.sending = true;

                    QuestionMessage.save(params, function () {
                        $scope.sended = true;
                        $scope.sending = false;
                        $scope.addAlert('success', 'Pergunta enviada com sucesso!');

                    }, function () {
                        $scope.sending = true;
                        $scope.addAlert('danger', 'Ocorreu um erro ao enviar a mensagem, tente mais tarde!');
                    });

                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }]);
