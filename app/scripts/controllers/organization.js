'use strict';

/**
 * @ngdoc function
 * @name todasAsPatasApp.controller:OrganizationCtrl
 * @description
 * # OrganizationCtrl
 * Controller of the todasAsPatasApp
 */
angular.module('todasAsPatasApp')
        .controller('OrganizationCtrl', ['$scope', 'Organization', '$location', function ($scope, Organization, $location) {
                $scope.page = $location.search().page || 1;
                $scope.limit = $location.search().limit || 30;
                $scope.loader = false;
                $scope.organizations = [];

                $scope.updateOrganizations = function () {
                    var params = {
                        limit: $scope.limit,
                        page: $scope.page
                    };
                    $scope.loader = true;
                    $scope.organizations = Organization.query(params, function(){
                        $scope.loader = false;
                    });
                };
                
                $scope.updateOrganizations();
            }]);
