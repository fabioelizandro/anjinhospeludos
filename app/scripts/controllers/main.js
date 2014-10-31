'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('MainCtrl', ['$scope', 'Pet', function($scope, Pet) {
                
                /**
                 * Paginação de pet
                 */
                $scope.pets = Pet.query();
                
                console.log($scope.pets);

                /**
                 * Filtros que serão utilizados para a listagem principal de animais
                 */
                $scope.filters = {};
        
                
                /**
                 * Limpa todos os filtros
                 */
                $scope.clearFilters = function(){
                    
                };
                
                /**
                 * Realiza os filtros para a listagem principal
                 */
                $scope.filter = function(){
                    
                };

            }]);
