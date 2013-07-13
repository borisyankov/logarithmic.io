angular.module('logarithmic').directive('error', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: { if: '&' },
        template: '<div class="error-wrapper"><div class="error fade" ng-show="if()" ng-animate="\'fade\'" ng-transclude></div></div>'
    };
});