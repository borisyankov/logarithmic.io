angular.module('logarithmic').controller('SignupCtrl', function($scope, $state, api) {

    $scope.model = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        subscribe: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
        $scope.visible = true;
    };

    $scope.ok = function() {
        $scope.validation = true;
        console.log($scope);
        if ($scope.form.$valid) {
            api.signup(model).then(function() {
                // hide
            });
        }
    }

    $scope.cancel = function(event) {
        event.preventDefault();
        //$state.views.modal = '';
        console.log($scope);
    }
});