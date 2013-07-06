function LoginController($scope) {

    $scope.canLogin = function() {

    }

    $scope.login = function() {
        console.log($scope.loginForm);
    }
}

function SignupController($scope) {
    $scope.signup = function() {
        console.log($scope.signupForm);
    }
}