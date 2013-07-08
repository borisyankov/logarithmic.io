angular.module('logarithmic').controller('ProjectCtrl', function($scope) {

    $scope.model = {
        name: ''
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.save = function() {
        $scope.validation = true;
    }
});