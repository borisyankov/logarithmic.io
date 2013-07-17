angular.module('logarithmic').controller('AccountCtrl', function($scope, $cookieStore) {

    $scope.model = {
        email: ''
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.ok = function() {
        $scope.validation = true;
    }

    $scope.cancel = function(event) {
        alert('canceled');
        event.preventDefault();
    }

    console.log($cookieStore.get('user'));
    //$cookieStore.put('user', 'bobolino');
});