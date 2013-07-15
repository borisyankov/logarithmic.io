angular.module('logarithmic').factory('api', function($http, $q) {

    var api = {};

    api.login = function(model) {
        return $http.post('/api/login', model);
    };

    api.signup = function(model) {

        return $http.post('/api/signup', model);

        console.log('called');
        var deferred = $q.defer();
        window.setTimeout(function() {
            deferred.resolve('oo');
            console.log('resolved')
        }, 2000);
        return deferred.promise;
    };

    api.subscribe = function(email) {
        return $http.post('/api/subscribe', { email: email });
    };


    return api;
});