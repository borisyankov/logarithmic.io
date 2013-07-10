angular.module('logarithmic').directive('validIf', function($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            scope.$watch(attrs.ngModel, function() {
                var valid = $parse(attrs.validIf)(scope);
                ctrl.$setValidity(attrs.name, valid);
            });
        }
    };
});