'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.questionMessage
 * @description
 * # questionMessage
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('QuestionMessage', ['$resource', 'API_DOMAIN', function ($resource, API_DOMAIN) {
                return $resource(API_DOMAIN + '/api/v1/questionmessage/:id/:controller', {
                    id: '@id'
                },
                {
                    query: {method: 'GET', isArray: true, params: {controller: 'index'}},
                    get: {method: 'GET', isArray: false, params: {controller: 'show'}},
                    save: {method: 'POST', params: {controller: 'create'}}
                });
            }]);
