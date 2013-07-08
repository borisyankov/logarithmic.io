angular.module('logarithmic').directive('validIfEquals', function() {
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