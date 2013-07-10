angular.module('logarithmic', ['ui.state']).config(function($stateProvider, $routeProvider) {

    var modals = ['account', 'changepwd', 'login', 'project', 'signup'];
    var pages = ['main', 'landing', 'dashboard'];

    $stateProvider
        .state('index', {
            url: '', // root route
            views: {
                "page": {
                    templateUrl: "/html/pages/main.html"
                },
                "modal": {
                    templateUrl: ""
                }
            }
        });

    modals.forEach(function(modal) {
        $stateProvider
            .state(modal, {
                url: '/' + modal,
                views: {
                    "page": {
                        templateUrl: "index.html"
                    },
                    "modal": {
                        templateUrl: "/html/modals/" + modal + ".html",
                        controller: modal[0].toUpperCase() + modal.slice(1) + 'Ctrl'
                    }
                }
            });
    });

    pages.forEach(function(page) {
        $stateProvider
            .state(page, {
                url: "/" + page,
                views: {
                    "page": {
                        templateUrl: '/html/pages/' + page + '.html',
                        controller: page[0].toUpperCase() + page.slice(1) + 'Ctrl'
                    },
                    "modal": {
                        templateUrl: ''
                    }
                }
            });
    });
});

function MainCtrl() {}
function LandingCtrl() {}