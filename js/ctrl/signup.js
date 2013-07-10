angular.module('logarithmic').controller('SignupCtrl', function($scope, $state, api) {

    $scope.model = {
        firstName: 'Boris',
        lastName: 'Yankov',
        email: 'borisyankov@gmail.com',
        password: 'smasher',
        confirmPassword: 'smasher',
        subscribe: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
        $scope.visible = true;
    };

    $scope.ok = function() {
        $scope.validation = true;
        if ($scope.form.$incalid) return;

        $scope.progress = true;
        api.signup($scope.model).then(function() {
            console.log('finished');
            $scope.progress = false;
        });
    }

    $scope.cancel = function(event) {
        event.preventDefault();
        //$state.views.modal = '';
        console.log($scope);
    }
});