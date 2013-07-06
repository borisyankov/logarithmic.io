function LoginController($scope) {
    $scope.login = function() {
        console.log($scope.loginForm.$valid);
    }
}

function SignupController($scope) {
    $scope.signup = function() {
        console.log($scope.signupForm.$valid);
    }
}