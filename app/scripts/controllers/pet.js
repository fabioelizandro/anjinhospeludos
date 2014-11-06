'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:PetCtrl
 * @description
 * # PetCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('PetCtrl', ['$scope', '$stateParams', 'Pet', function ($scope, $stateParams, Pet) {
            $scope.pet = Pet.get({id : $stateParams.id});
        }]);
