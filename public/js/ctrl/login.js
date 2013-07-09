angular.module('logarithmic').controller('LoginCtrl', function($scope) {

    $scope.model = {
        email: 'aa123',
        password: '',
        stayLoggedIn: false,
        roflcopter: 'zuup'
    };

    $scope.visible = true;

    $scope.show = function() {
        console.log('show');
        $scope.form.$setPristine();
    };

    $scope.canLogin = function() {

    };

    $scope.cancel = function(event) {
        $scope.visible = false;
        event.preventDefault();
    }

    $scope.ok = function() {
        console.log('login');
    }
});