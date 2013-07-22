angular.module('logarithmic').directive('buttonCancel', function($location) {
    return {
        restrict: 'E',
        replace: true,
        template: '<button ng-click="cancel()" ng-transclude></button>',
        transclude: true,
        link: function(scope, element, attrs) {

            scope.cancel = function() {

                var form = scope.form;

                event.preventDefault();

                if (form.$progress) {
                    form.$progress.reject();
                    form.$progress = undefined;
                } else {
                    delete $location.$$search.m;
                    $location.path($location.$$path);
                }
            }
        }
    };
});