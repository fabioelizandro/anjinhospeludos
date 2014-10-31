'use strict';

/**
 * @ngdoc directive
 * @name anjinhospeludosApp.directive:icheck
 * @description
 * # icheck
 */
angular.module('todasAsPatasApp')
        .directive('icheck', ['$timeout', function($timeout) {
                return {
                    require: 'ngModel',
                    link: function($scope, element, $attrs, ngModel) {
                        return $timeout(function() {
                            var value;
                            value = $attrs.value;

                            $scope.$watch($attrs.ngModel, function(newValue) {
                                jQuery(element[0]).iCheck('update');
                            });

                            return jQuery(element[0]).iCheck({
                                checkboxClass: 'icheckbox_flat',
                                radioClass: 'iradio_flat'

                            }).on('ifChanged', function(event) {
                                if (jQuery(element[0]).attr('type') === 'checkbox' && $attrs.ngModel) {
                                    $scope.$apply(function() {
                                        return ngModel.$setViewValue(event.target.checked);
                                    });
                                }
                                if (jQuery(element[0]).attr('type') === 'radio' && $attrs.ngModel) {
                                    return $scope.$apply(function() {
                                        return ngModel.$setViewValue(value);
                                    });
                                }
                            });
                        });
                    }
                };
            }]);
