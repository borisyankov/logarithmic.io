angular.module('logarithmic', ['ui.state', 'ngCookies'])
    .config(function($locationProvider, $stateProvider, $httpProvider) {

        $httpProvider.defaults.withCredentials = true;
        $locationProvider.html5Mode(true);
    })
    .run(function($rootScope, $location) {
        $rootScope.$on('$locationChangeStart', function(event, next, current) {

            var page = $location.$$path.slice(1) || "subscribe",
                modal = $location.$$search.m;
            $rootScope.page = {
                template: page + '.html'
            };

            console.log($location);
            $rootScope.modal = modal
                ? {
                template: modal + '.html',
                title: 'wuuut'
            } : { template: undefined };
        });
    });