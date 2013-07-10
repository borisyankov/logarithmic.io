angular.module('logarithmic').directive('buttonProgress', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: { text: '@', progress: '@' },
        template: '<button class="default" ng-class="{ progress: {{progress}} }">'
            + '<div class="spinner" ng-show="progress">'
            + '<div class="icon-progress"></div>'
            + '</div>'
            + '<span ng-hide="progress">{{text}}</span>'
            + '</button>'
    };
});