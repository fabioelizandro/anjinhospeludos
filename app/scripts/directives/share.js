'use strict';

/**
 * @ngdoc directive
 * @name anjinhospeludosApp.directive:icheck
 * @description
 * # share
 */
angular.module('todasAsPatasApp')
        .directive('share', ['$timeout', '$location', function ($timeout, $location) {
                return {
                    restrict: 'A',
                    link: function (scope, $elm, $attrs) {
                        $elm.click(function () {
                            $timeout(function () {
                                var link = $location.protocol() + '://' + $location.host() + (($location.port()) ? (':' + $location.port()) : '') + $attrs.share;
                                FB.ui(
                                        {
                                            method: 'share',
                                            href: link
                                        }, function () {
                                });
                            });
                        });
                    }
                };
            }]);
