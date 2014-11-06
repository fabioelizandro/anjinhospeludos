'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.user
 * @description
 * # user
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('User', function ($resource) {
            return $resource('/api/users/:id/:controller', {
                id: '@_id'
            },
            {
                changePassword: {
                    method: 'PUT',
                    params: {
                        controller: 'password'
                    }
                },
                get: {
                    method: 'GET',
                    params: {
                        id: 'me'
                    }
                }
            });
        });
