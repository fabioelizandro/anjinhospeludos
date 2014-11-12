'use strict';

/**
 * @ngdoc directive
 * @name anjinhospeludosApp.directive:icheck
 * @description
 * # share
 */
angular.module('todasAsPatasApp')
        .directive('share', ['$timeout', function ($timeout) {
                return {
                    restrict: 'A',
                    link: function (scope, $elm, $attrs) {
                        $elm.click(function () {
                            $timeout(function () {
                                FB.ui(
                                        {
                                            method: 'share',
                                            href: $attrs.share
                                        }, function (response) {
                                });
                            });
                        });
                    }
                };
            }]);
