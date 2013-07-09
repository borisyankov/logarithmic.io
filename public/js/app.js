angular.module('logarithmic', ['ui.state']).config(function($stateProvider, $routeProvider) {

    var modals = ['account', 'changepwd', 'login', 'project', 'signup'];

    $stateProvider
        .state('index', {
            url: "", // root route
            views: {
                "main": {
                    templateUrl: "index.html"
                },
                "modal": {
                    templateUrl: ""
                }
            }
        });

    modals.forEach(function(modal) {
        $stateProvider
            .state(modal, {
                url: "/" + modal,
                views: {
                    "main": {
                        templateUrl: "index.html"
                    },
                    "modal": {
                        templateUrl: "/html/modals/" + modal + ".html",
                        controller: modal[0].toUpperCase() + modal.slice(1) + 'Ctrl'
                    }
                }
            });
    });
});