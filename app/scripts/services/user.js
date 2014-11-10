'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.user
 * @description
 * # user
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('User', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
            return $resource(API_DOMAIN+'/api/v1/user/:controller', {
                id: '@id'
            },
            {
                get: {
                    method: 'GET',
                    params: {
                        controller: 'profile'
                    }
                },
                updatePets: {
                    method: 'PUT',
                    params: {
                        controller: 'favorite-pet'
                    }
                },
                update: {
                    method: 'PUT',
                    params: {
                        controller: 'profile-update'
                    }
                }
            });
        }]);
