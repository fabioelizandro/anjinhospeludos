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
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4054814/large_medium/21986064_500x496.jpg?1407402550'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/3581186/large_medium/21309741_500x625.jpg?1403947582'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4041953/large_medium/21969704_245x270.jpg?1407316080'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4001582/large_medium/21924444_478x640.jpg?1407052731'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4027781/large_medium/21958652_500x375.jpg?1407228790'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4010909/large_medium/21931905_500x666.jpg?1407138306'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/3876766/large_medium/21718225_500x649.jpg?1406107717'},
                    {image: 'https://d23xpgl4j2w7z3.cloudfront.net/photos/animals/4040830/large_medium/21922147_500x666.jpg?1407315453'}
                ];

                /**
                 * Salva a pesquisa realizada
                 */
                $scope.saveSearch = function(){
                    
                };
                
                /**
                 * Limpa todos os filtros
                 */
                $scope.clearFilters = function(){
                    
                };

            }]);
