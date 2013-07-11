angular.module('logarithmic').controller('ChangepwdCtrl', function($scope) {

    $scope.model = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.ok = function() {
        $scope.validation = true;
    }

    $scope.cancel = function(event) {
        event.preventDefault();
    }
});