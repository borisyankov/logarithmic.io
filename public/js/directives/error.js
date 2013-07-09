angular.module('logarithmic').directive('error', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: { if: '&' },
        template: '<div class="error" ng-show="if()" ng-transclude></div>'
    };
});