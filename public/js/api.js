angular.module('logarithmic').factory('api', function($http, $q) {

    var api = {};

    api.login = function(model) {
        return $http.post('/api/login', { login: model });
    };

    api.signup = function(model) {
        return $http.post('/api/signup', { signup: model });
    };

    api.subscribe = function(email) {
        return $http.post('/api/subscribe', { email: email });
    };


    return api;
});