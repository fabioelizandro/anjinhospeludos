'use strict';

/**
 * @ngdoc directive
 * @name anjinhospeludosApp.directive:isotope
 * @description
 * # isotope
 */
angular.module('todasAsPatasApp')
        .directive('offcanvas', ['$timeout', function($timeout) {
                return {
                    restrict: 'A',
                    link: function(scope, element, attrs) {
                        $timeout(function() {
                            jQuery(element).click(function() {
                                jQuery(attrs.rowOffcanvas || '.row-offcanvas').toggleClass('active');
                            });
                        });
                    }
                };
            }]);
