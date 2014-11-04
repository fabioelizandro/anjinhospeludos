'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.enum
 * @description
 * # enum
 * Factory in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('Enum', function () {

            var enums = {
                type: [
                    {id: 1, description: 'Cachorro'},
                    {id: 2, description: 'Gato'}
                ],
                age: [
                    {id: 1, description: 'Baby'},
                    {id: 2, description: 'Jovem'},
                    {id: 3, description: 'Adulto'},
                    {id: 4, description: 'Sênior'}
                ],
                gender: [
                    {id: 1, description: 'Macho'},
                    {id: 2, description: 'Fêmea'}
                ],
                size: [
                    {id: 1, description: 'Pequeno'},
                    {id: 2, description: 'Médio'},
                    {id: 3, description: 'Grande'}
                ],
                sorting: [
                    {id: 1, description: 'Recentes', direction : 'DESC', key: 'updatedAt'},
                    {id: 2, description: 'Mais vistos', direction : 'DESC', key: 'displayQuantity'},
                    {id: 3, description: 'Mais favoritados', direction : 'DESC', key: 'amountFavorite'}
                ]
            };

            return {
                get: function (name) {
                    if (name !== undefined) {
                        return enums[name];
                    }
                    return enums;
                },
                getItem: function(enumName, itemId){
                    if (itemId === undefined || itemId === null) {
                        return null;
                    }
                    
                    if (_.isNumber(Number(itemId))) {
                        itemId = Number(itemId);
                    }
                    
                    return _.find(enums[enumName], {id: itemId});
                }
            };
        });
