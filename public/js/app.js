angular.module('logarithmic', ['ui.state', 'ngCookies'])
    .config(['$locationProvider', '$stateProvider', '$httpProvider', config]);

function config($locationProvider, $stateProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $locationProvider.html5Mode(true); //hashPrefix('!'); //


    var modals = [
            { name: 'Account', template: 'account' },
            { name: 'Change Password', template: 'changepwd' },
            { name: 'Login', template: 'login' },
            { name: 'Project', template: 'project' },
            { name: 'Signup', template: 'signup' }
        ],
        pages = ['main', 'subscribe', 'pricing', 'landing', 'support', 'dashboard'];

    function view(name) {
        return {
            templateUrl: name + '.html',
            controller: name[0].toUpperCase() + name.slice(1) + 'Ctrl'
        }
    }

    pages.forEach(function(page) {

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

/*    $stateProvider
        .state('all', {
            url: '/:page/:modal',
            onEnter: function(page, modal) {
                console.log(page, '--', modal);
            }
        });*/
/*

    modals.forEach(function(modal) {
        $stateProvider
            .state(modal.template, {
                url: '/' + modal.template,
                views: {
                    page: view('dashboard'),
                    modal: view(modal.template)
                },
                onEnter: function($rootScope) {
                    $rootScope.modal = modal;
                    $rootScope.modal.visible = true;
                }
            });
    });

    pages.forEach(function(page) {

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
    });*/
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