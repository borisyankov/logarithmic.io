angular.module('logarithmic').controller('SignupCtrl', function($scope, $state, api) {

    $scope.model = {
        firstName: 'Boris',
        lastName: 'Yankov',
        email: 'borisyankov@gmail.com',
        password: 'smasher',
        confirmPassword: 'smasher',
        subscribe: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.signup = function() {

        api.signup($scope.model).then(function() {
            $scope.form.$progress.resolve();
            $scope.form.$progress = undefined;
        }, function() {
            $scope.form.email.$exists = true;
            $scope.form.$setValidity('email', false);
            $scope.form.$validation = true;
            $scope.form.$progress = undefined;
        });
    }
});