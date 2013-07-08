angular.module('logarithmic').controller('LoginCtrl', function($scope) {

    $scope.model = {
        email: '',
        password: '',
        stayLoggedIn: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.canLogin = function() {

    };

    $scope.login = function() {
        console.log($scope.form);
    }
});