angular.module('logarithmic').directive('validIfEquals', function($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            scope.$watch(attrs.ngModel, function() {
                var v1 = $parse(attrs.ngModel)(scope),
                    v2 = $parse(attrs.validIfEquals)(scope);
                ctrl.$setValidity(attrs.name, angular.equals(v1, v2));
            });
        }
    };
});