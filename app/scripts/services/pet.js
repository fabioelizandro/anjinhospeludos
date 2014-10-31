'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.Pet
 * @description
 * # Pet
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('Pet', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
            return $resource(API_DOMAIN+'/api/v1/public/pet/:id/:controller', {
                id: '@id'
            },
            {
                query: {method: 'GET', isArray: false},
            });
        }]);
