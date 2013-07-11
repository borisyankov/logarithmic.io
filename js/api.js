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

        var deferred = $q.defer();
        window.setTimeout(function() {
            deferred.resolve('oo');
            console.log('resolved')
        }, 2000);
        return deferred.promise;

        return $http.post('/api/signup', model);
    };

    api.subscribe = function(email) {

        var apiUrl = 'https://us7.api.mailchimp.com/2.0/lists/subscribe',
            request = {
                apikey: '9f382cf81b9109ed54e7a51b5a50f0a9-us7',
                id: 'e73105fd8d',
                email: { email: email },
                double_optin: true,
                update_existing: true,
                send_welcome: true
            },
            deferred = $q.defer();

        return $http.post(apiUrl, request);

        return $http.post(apiUrl, request);

        //return $http.post('/api/subscribe', email);

        return deferred.promise;
    };


    return api;
});