angular.module('logarithmic').directive('buttonSubmit', function($q, $animator) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/js/directives/templates/buttonSubmit.html',
        transclude: true,
        link: function(scope, element, attrs) {

            scope.click = function() {

                var form = scope.form,
                    animator = $animator(scope, attrs);

                form.$validation = true;

                if (form.$invalid) {
                    animator.animate('invalid', element);
                } else {
                    form.$progress = true;
                    scope.okComplete = $q.defer();
                    scope.$eval(attrs.ok);

                    scope.okComplete.promise.then(function() {
                        form.$progress = false;
                        console.log('done');
                    });
                }
            }
        }
    };
});