'use strict';

/**
 * @ngdoc directive
 * @name anjinhospeludosApp.directive:icheck
 * @description
 * # icheck
 */
angular.module('todasAsPatasApp')
        .directive('autoExec', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, $elm, $attrs) {
                    $timeout(function(){
                        scope.$eval($attrs.autoExec);
                    }, ($attrs.timeout * 1) || 3000);
                }
            };
        }]);
