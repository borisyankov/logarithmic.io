angular.module('logarithmic').controller('SignupCtrl', function($scope) {

    $scope.model = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.signup = function() {
        $scope.validation = true;
        console.log($scope.form);
    }
});