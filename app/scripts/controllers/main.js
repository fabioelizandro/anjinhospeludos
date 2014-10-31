'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
<<<<<<< HEAD
        .controller('MainCtrl', ['$scope', 'Pet', function($scope, Pet) {
                
                /**
                 * Paginação de pet
                 */
                $scope.pets = Pet.query();
                
                console.log($scope.pets);
=======
        .controller('MainCtrl', ['$scope', function($scope) {
>>>>>>> 08036cf9c3d4dca86fec89e56515b969a7569a69

                /**
                 * Filtros que serão utilizados para a listagem principal de animais
                 */
                $scope.filters = {};
        
                
<<<<<<< HEAD
=======
                $scope.dogs = [
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4054814/large_medium/21986064_500x496.jpg?1407402550'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/3581186/large_medium/21309741_500x625.jpg?1403947582'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4041953/large_medium/21969704_245x270.jpg?1407316080'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4001582/large_medium/21924444_478x640.jpg?1407052731'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4027781/large_medium/21958652_500x375.jpg?1407228790'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4010909/large_medium/21931905_500x666.jpg?1407138306'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/3876766/large_medium/21718225_500x649.jpg?1406107717'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4040830/large_medium/21922147_500x666.jpg?1407315453'}
                ];
                
>>>>>>> 08036cf9c3d4dca86fec89e56515b969a7569a69
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
