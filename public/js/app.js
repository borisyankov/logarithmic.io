angular.module('logarithmic', ['ui.state', 'ngCookies']).config(function($stateProvider, $locationProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $locationProvider.hashPrefix('!'); // .html5Mode(true)

    function view(name, type) {
        return {
            templateUrl: '/html/' + type + 's/' + name + '.html',
            controller: name[0].toUpperCase() + name.slice(1) + 'Ctrl'
        }
    }

    $stateProvider
        .state('index', {
            url: '',
            views: {
                page: view('subscribe', 'page')
            }
        });

    ['account', 'changepwd', 'login', 'project', 'signup'].forEach(function(modal) {
        $stateProvider
            .state(modal, {
                url: '/' + modal,
                views: {
                    page: view('dashboard', 'page'),
                    modal: view(modal, 'modal')
                },
                onEnter: function($rootScope) {
                    $rootScope.modal = modal;
                }
            });
    });

    ['main', 'subscribe', 'pricing', 'landing', 'support',
        'dashboard'].forEach(function(page) {
            $stateProvider
                .state(page, {
                    url: "/" + page,
                    views: {
                        page: view(page, 'page')
                    },
                    onEnter: function($rootScope) {
                        $rootScope.modal = false;
                    }
                });
        });
});

function MainCtrl() {
}
function LandingCtrl() {
}
function DashboardCtrl() {
}
function PricingCtrl() {
}
function SupportCtrl() {
}