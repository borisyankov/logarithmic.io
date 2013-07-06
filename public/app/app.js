angular.module('logarithmic', [])
    .controller('LoginController', function($scope) {

        $scope.email = 'some@email.com';
        $scope.password = 'smasher@email.com';

        $scope.canLogin = function() {

        }

        $scope.login = function() {
            console.log($scope.loginForm);
        }
    })
    .controller('SignupController', function($scope) {
        $scope.signup = function() {
            console.log($scope.signupForm);
        }
    });