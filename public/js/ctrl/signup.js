angular.module('logarithmic').controller('SignupCtrl', function($scope, $state) {

    $scope.model = {
        firstName: '',
        lastName: '',
        email: '',
        password: '12345',
        confirmPassword: '3',
        subscribe: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
        $scope.visible = true;
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
        $state.visible = false;
    }
});