'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.organization
 * @description
 * # organization
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('Organization', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
                return $resource(API_DOMAIN + '/api/v1/public/organization/:id/:controller', {
                    id: '@id'
                },
                {
                    query: {method: 'GET', isArray: false, params: {controller: 'index'}},
                    get: {method: 'GET', isArray: false, params: {controller: 'show'}}
                });
            }]);
