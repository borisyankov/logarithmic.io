angular.module('logarithmic').controller('ProjectCtrl', function($scope) {

    $scope.model = {
        name: '1',
        password: '2'
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.ok = function() {
        $scope.validation = true;
    }

    $scope.cancel = function(event) {
        event.preventDefault();
    }
});