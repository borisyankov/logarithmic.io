angular.module('logarithmic').directive('buttonProgress', function() {
    return {
        restrict: 'E',
        scope: { text: '@', progress: '&' },
        template: '<button class="default">'
            + '<div class="spinner" ng-show="progress()">'
            + '<div class="icon-progress"></div>'
            + '</div>'
            + '<span ng-hide="progress()">{{text}}</span>'
            + '</button>'
    };
});