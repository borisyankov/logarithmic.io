angular.module('logarithmic').controller('SignupCtrl', function($scope) {

    $scope.model = {
        firstName: 'first',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        subscribe: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.ok = function() {
        $scope.validation = true;
        console.log($scope);
        if ($scope.form.$valid) {
            console.log('form is valid!');
        }
    }

    $scope.cancel = function(event) {
        event.preventDefault();
    }
});