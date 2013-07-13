angular.module('logarithmic').controller('SubscribeCtrl', function($scope, $state, api) {

    $scope.subscribe = function(deferred) {
        api.subscribe($scope.email).success(function() {
            deferred.resolve();
        });
    }
});