'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.breed
 * @description
 * # breed
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('Breed', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
                return $resource(API_DOMAIN + '/api/v1/public/breed/:id/:controller', {
                    id: '@id'
                },
                {
                    query: {method: 'GET', isArray: true, cache: true}
                });
            }]);