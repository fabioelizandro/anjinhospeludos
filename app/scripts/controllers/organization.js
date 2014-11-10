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
                    Organization.query(params, function(data){
                        $scope.loader = false;
                        if ($scope.organizations.count === undefined) {
                            $scope.organizations = data;
                        }else{
                            $scope.organizations.resources = data.resources;
                            $scope.organizations.count = data.count;
                        }
                    });
                };
                
                $scope.updateOrganizations();
            }]);
