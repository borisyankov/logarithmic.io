angular.module('logarithmic').directive('modal', function() {
    return {
        restrict: 'E',
       // replace: true,
       //transclude: true,
       // scope: true,
       // template: '<div class="overlay" ng-animate="modal"><div class="modal"><h2 class="modal-title">{{title}}</h2><div class="modal-content" ng-transclude></div></div></div>',
        link: function(scope, element, attrs) {
            scope.title = attrs.title;
            console.log(scope);
        }
    };
});