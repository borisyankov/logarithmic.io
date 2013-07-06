angular.module('logarithmic', []).directive('error', function() {
    return {
        restrict: 'E',
        scope: {
            ngModel: '='
        },
        template: '<div class="error" ng-show="{{if}}">{{then}}</div>',
        replace: true,
        require: 'ngModel',
        link: function($scope, elem, attr, ctrl) {
/*
            $scope.label = attr.ngModel;
            $scope.id = attr.ngModel;
            console.debug(attr.ngModel);
            console.debug($scope.$parent.$eval(attr.ngModel));
            var textField = $('input', elem).
                attr('ng-model', attr.ngModel).
                val($scope.$parent.$eval(attr.ngModel));
*/

            $compile(textField)($scope.$parent);
        }
    };
});