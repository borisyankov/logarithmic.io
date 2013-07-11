angular.module('logarithmic').controller('LoginCtrl', function($scope) {

    $scope.model = {
        email: '1',
        password: '1',
        stayLoggedIn: true,
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

        event.preventDefault();

        if ($scope.progress) {
            $scope.progress = false;
        } else {
            //$state.views.modal = ''; hide modal
        }
    }

    $scope.ok = function() {

        $scope.validation = true;
        if ($scope.form.$invalid) return;

        $scope.progress = true;
        api.login($scope.model).then(function() {
            console.log('logged in or not?');
            $scope.progress = false;
        });

    }
});