angular.module('logarithmic', ['ui.state', 'ngCookies'])
    .config(['$locationProvider', '$stateProvider', '$httpProvider', config]);

function config($locationProvider, $stateProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $locationProvider.hashPrefix('!'); // .html5Mode(true)

    function view(name) {
        return {
            templateUrl: name + '.html',
            controller: name[0].toUpperCase() + name.slice(1) + 'Ctrl'
        }
    }

    $stateProvider
        .state('index', {
            url: '',
            views: {
                page: view('subscribe')
            }
        });

    ['account', 'changepwd', 'login', 'project', 'signup'].forEach(function(modal) {
        $stateProvider
            .state(modal, {
                url: '/' + modal,
                views: {
                    page: view('dashboard'),
                    modal: view(modal)
                },
                onEnter: function($rootScope) {
                    $rootScope.modal = modal;
                }
            });
    });

    ['main', 'subscribe', 'pricing', 'landing', 'support',
        'dashboard'].forEach(function(page) {

            //$routeProvider.when('/' + page, view(page, 'page'));

            $stateProvider
                .state(page, {
                    url: "/" + page,
                    views: {
                        page: view(page)
                    },
                    onEnter: function($rootScope) {
                        $rootScope.modal = false;
                    }
                });
        });
}

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