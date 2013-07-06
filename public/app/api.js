angular.module('logarithmic', []).factory('login', function($http) {
    var login;

    console.log($http);

    $http.get('/api/login').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    return login;
});