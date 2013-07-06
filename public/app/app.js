angular.module('logarithmic')
    .controller('LoginController', function($scope) {

        $scope.email = 'some@email.com';
        $scope.password = 'smasher@email.com';

        $scope.canLogin = function() {

        }

        $scope.login = function() {
            console.log($scope.form);
        }
    })
    .controller('SignupController', function($scope) {

        $scope.subscribe = true;

        $scope.signup = function() {
            $scope.validation = true;
            console.log($scope.form);
        }
    });