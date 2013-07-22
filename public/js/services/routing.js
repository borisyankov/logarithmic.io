angular.module('logarithmic').service('routing', function($rootScope, $location) {

    return {
        config: function() {
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
        }
    };
});