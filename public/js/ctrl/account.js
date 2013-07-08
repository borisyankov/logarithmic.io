angular.module('logarithmic').controller('AccountCtrl', function($scope) {

    $scope.model = {
        email: ''
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.save = function() {
        $scope.validation = true;
    }

    $scope.cancel = function() {
        alert('canceled');
    }
});