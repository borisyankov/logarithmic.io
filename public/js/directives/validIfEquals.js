angular.module('logarithmic').directive('validIfEquals', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            scope.$watch(attrs.ngModel, function() {
                var v1 = scope[attrs.ngModel],
                    v2 = scope[attrs.validIfEquals];
                console.log(v1, v2, angular.equals(v1, v2));
                console.log(scope, attrs, attrs.ngModel, attrs['validIfEqual']);
                ctrl.$setValidity(attrs.name, angular.equals(v1, v2));
            });
        }
    };
});