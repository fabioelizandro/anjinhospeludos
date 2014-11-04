'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:PetCtrl
 * @description
 * # PetCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('PetCtrl', ['$scope', '$routeParams', 'Pet', function ($scope, $routeParams, Pet) {
            $scope.pet = Pet.get({id : $routeParams.id});
            console.log($scope.pet);
        }]);
