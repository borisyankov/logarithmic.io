angular.module('logarithmic').directive('buttonSubmit', function($q, $animate) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'buttonSubmit.html',
        transclude: true,
        scope: { form: '@' },
        link: function(scope, element, attrs) {

            scope.click = function() {

                var form = scope.$parent.form,
                    animator = $animate(scope, attrs);

                form.$validation = true;
                console.log('yo');
                if (form.$invalid || form.$progress) {
                    animator.animate('invalid', element);
                    console.log('animate');
                } else {
                    console.log('ok called');

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