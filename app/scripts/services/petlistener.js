'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.Pet
 * @description
 * # Pet
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('PetListener', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
                return $resource(API_DOMAIN + '/api/v1/petlistener/:id/:controller', {
                    id: '@id'
                },
                {
                    query: {method: 'GET', isArray: true, params: {controller: 'index'}},
                    get: {method: 'GET', params: {controller: 'show'}},
                    save: {method: 'POST', params: {controller: 'create'}},
                    delete: {method: 'DELETE', params: {controller: 'delete'}}
                });
            }]);
