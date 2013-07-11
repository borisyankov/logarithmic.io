angular.module('logarithmic').controller('SubscribeCtrl', function($scope, $state, api) {

    $scope.ok = function() {

        $scope.validation = true;
        if ($scope.form.$invalid) return;

        $scope.progress = true;
        api.subscribe($scope.email).success(function() {
            console.log('finished');
            $scope.progress = false;
        });
    }
});