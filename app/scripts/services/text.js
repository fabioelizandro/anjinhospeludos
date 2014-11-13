'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.organization
 * @description
 * # organization
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('Text', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
                return $resource(API_DOMAIN + '/api/v1/public/text/:id/:controller', {
                    id: '@id'
                },
                {
                    query: {method: 'GET', isArray: false, cache: true, params: {controller: 'enum'}}
                });
            }]);
