angular.module('logarithmic').directive('modal', function() {
    return {
        restrict: 'E',
        //replace: true,
        //scope: { yo: '@', if: '&' },
        transclude: true,
        template: '<div class="modal"><h2 class="modal-title">{{title}}</h2><div class="modal-content" ng-transclude></div></div>'
    };
});

