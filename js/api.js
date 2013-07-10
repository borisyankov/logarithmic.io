angular.module('logarithmic').factory('api', function($http) {

    var api = {};

    console.log($http);

    api.login = function(model) {
        $http.get('/api/login').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }

    api.signup = function(model) {
        $http.get('/api/login').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }

    return api;
});