angular.module('logarithmic').controller('SubscribeCtrl', function($scope, api) {

    $scope.step = 1;

    $scope.$formSubmit = function(deferred) {
        api.subscribe($scope.email).success(function() {
            deferred.resolve();
            $scope.step++;
        });
    }
});