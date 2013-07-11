angular.module('logarithmic').factory('api', function($http, $q) {

    var api = {};

    api.login = function(model) {
        return $http.post('/api/login', model);
        /*
         success(function(data, status, headers, config) {
         // this callback will be called asynchronously
         // when the response is available
         }).
         error(function(data, status, headers, config) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         });*/
    };

    api.signup = function(model) {

//        return $http.post('/api/signup', model);

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