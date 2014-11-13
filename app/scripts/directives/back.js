'use strict';

/**
 * @ngdoc directive
 * @name todasAsPatasApp.directive:isotope
 * @description
 * # isotope
 */
angular.module('todasAsPatasApp')
        .directive('back', ['$window', '$timeout', function ($window, $timeout) {
            return {
                restrict: 'A',
                link: function (scope, $elm) {
                    $elm.click(function(){
                        $timeout(function(){
                            $window.history.back();
                        });
                    });
                }
            };
        }]);