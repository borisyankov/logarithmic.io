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
            $scope.form.$progress.resolve();
            $scope.form.$progress = undefined;
        }, function() {
            $scope.form.password.$setValidity('incorrect', false);
            $scope.form.$validation = true;
            $scope.form.$progress = undefined;
        });
    }
});