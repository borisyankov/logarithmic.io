angular.module('logarithmic').directive('buttonSubmit', function($q, $animator) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'buttonSubmit.html',
        transclude: true,
        scope: { form: '@' },
        link: function(scope, element, attrs) {

            scope.click = function() {

                var form = scope.$parent.form,
                    animator = $animator(scope, attrs);

                form.$validation = true;

                if (form.$invalid || form.$progress) {
                    animator.animate('invalid', element);
                } else {
                    form.$progress = $q.defer();

                    scope.$eval(attrs.ok);

                    form.$progress.promise.then(function() {
                        form.$progress = undefined;
                    });
                }
            }
        }
    };
});