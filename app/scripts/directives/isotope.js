'use strict';

/**
 * @ngdoc directive
 * @name anjinhospeludosApp.directive:isotope
 * @description
 * # isotope
 */
angular.module('todasAsPatasApp')
        .directive('isotope', ['$timeout', function($timeout) {
                return {
                    restrict: 'A',
                    link: function(scope, element, attrs) {
                        $timeout(function() {
                            imagesLoaded(element[0], function() {
                                jQuery(element[0]).isotope({
                                    itemSelector: attrs.itemSelector,
                                    layoutMode: attrs.layoutMode
                                });
                            });
                        });
                    }
                };
            }]);
