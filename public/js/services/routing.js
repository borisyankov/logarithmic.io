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

                $rootScope.modal = $rootScope.modal || {};

                if (modal) {
                    $rootScope.modal.template = modal + '.html';
                    $rootScope.modal.title = 'wuuutable';
                }

                $rootScope.modal.visible = modal;
            });
        }
    };
});