angular.module('logarithmic', ['ngCookies'])
    .config(function($locationProvider, $httpProvider) {

        $httpProvider.defaults.withCredentials = true;
        $locationProvider.html5Mode(true);
    })
    .run(function(routing) {
        routing.config();
    });