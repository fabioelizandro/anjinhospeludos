'use strict';

/**
 * @ngdoc directive
 * @name todasAsPatasApp.directive:isotope
 * @description
 * # isotope
 */
angular.module('todasAsPatasApp')
        .directive('scrollToTop', [function () {
            return {
                restrict: 'A',
                link: function (scope, $elm) {
                    $elm.on('click', function () {
                        var body = $('html, body');
                        body.animate({scrollTop: 0}, '500', 'swing');
                    });
                }
            };
        }]);