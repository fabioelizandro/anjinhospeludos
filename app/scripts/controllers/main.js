'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('MainCtrl', ['$scope', function($scope) {

                $scope.dogs = [
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)},
                    {image: 'http://placehold.it/350x' + Math.floor((Math.random() * 350) + 250)}
                ];



            }]);
