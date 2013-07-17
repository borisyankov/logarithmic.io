angular.module('logarithmic').controller('LoginCtrl', function($scope, api, $cookies) {

    console.log($cookies.user);

    $scope.model = {
        email: 'bobi@yankov.com',
        password: '123456',
        stayLoggedIn: true
    };

    $scope.show = function() {
        $scope.form.$setPristine();
    };

    $scope.login = function() {
        console.log('called');
        api.login($scope.model).then(function() {
            console.log('logged in or not?');
            $scope.progress = false;
        });
    }
});