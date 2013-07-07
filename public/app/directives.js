angular.module('logarithmic')
    .directive('error', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: { yo: '@', if: '&' },
            template: '<div class="error" ng-show="if()" ng-transclude></div>'
        };
    })
    .directive('validIf', function($parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ctrl) {
                scope.$watch(attrs.ngModel, function() {
                    var valid = $parse(attrs.validIf)(scope);
                    ctrl.$setValidity(attrs.ngModel, valid);
                });

            }
        };
    })
    .directive('validIfEquals', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ctrl) {
                scope.$watch(attrs.ngModel, function() {
                    var v1 = scope[attrs.ngModel],
                        v2 = scope[attrs.validIfEquals];
                    ctrl.$setValidity(attrs.ngModel, angular.equals(v1, v2));
                });
            }
        };
    });

