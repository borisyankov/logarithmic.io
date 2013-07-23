angular.module('logarithmic').service('globals', function($rootScope, $location) {
    return {
        config: function() {
            $rootScope.modal = {
                visible: false,
                close: function() {
                    delete $location.$$search.m;
                    $location.path($location.$$path);
                }
            };
        }
    };
});