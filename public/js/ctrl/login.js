angular.module('logarithmic').controller('LoginCtrl', function($scope) {

    $scope.model = {
        email: '1',
        password: '1',
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