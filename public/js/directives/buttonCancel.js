angular.module('logarithmic').directive('buttonCancel', function($q, $animator) {
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
                    // cancel promise
                    form.$progress.reject();
                    form.$progress = undefined;
                } else {
                    // close modal
                    //$state.views.modal = ''; hide modal
                }
            }
        }
    };
});