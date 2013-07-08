angular.module('logarithmic').controller('ChangePasswordCtrl', function($scope) {

    $scope.model = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.signup = function() {
        $scope.validation = true;
    }
});