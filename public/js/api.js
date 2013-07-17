angular.module('logarithmic').factory('api', function($http, $q) {

    var api = {};

    function post(method, data) {
        return $http.post('/api/' + method, data);
    }

    api.login = function(model) {
        return post('login', { login: model });
    };

    api.signup = function(model) {
        return post('signup', { signup: model });
    };

    api.subscribe = function(email) {
        return post('subscribe', { email: email });
    };


    return api;
});