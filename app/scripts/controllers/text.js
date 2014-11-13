'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:OrganizationCtrl
 * @description
 * # OrganizationCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('TextCtrl', ['$scope', 'Text', '$stateParams', '$state', function ($scope, Text, $stateParams, $state) {
                $scope.text = {};
                $scope.texts = {};
                $scope.type = $stateParams.type;
                
                Text.query(function(data){
                    $scope.texts = data;
                    $scope.text = $scope.texts[$scope.type];
                });
                
            }]);
