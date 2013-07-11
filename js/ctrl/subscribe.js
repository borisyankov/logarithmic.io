angular.module('logarithmic').controller('SubscribeCtrl', function($scope, $state, api) {

    $scope.model = {
        email: 'Boris'
    };

    $scope.show = function() {
        $scope.form.$setPristine();
        $scope.visible = true;
    };

    $scope.ok = function() {

        $scope.validation = true;
        if ($scope.form.$invalid) return;

        $scope.progress = true;
        api.subscribe($scope.email).then(function() {
            console.log('finished');
            $scope.progress = false;
        });
    }

    $scope.cancel = function(event) {

        event.preventDefault();

        if ($scope.progress) {
            $scope.progress = false;
        } else {
            //$state.views.modal = ''; hide modal
        }
    }
});