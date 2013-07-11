angular.module('logarithmic', ['ui.state']).config(function($stateProvider, $routeProvider) {

    function view(name, type) {
        return {
            templateUrl: '/html/' + type + 's/' + name + '.html',
            controller: name[0].toUpperCase() + name.slice(1) + 'Ctrl'
        }
    }

    $stateProvider
        .state('index', {
            url: '', // root route
            views: view('main', 'page')
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
                    $rootScope.modal = true;
                    console.log($rootScope);
                }
            });
    });

    ['main', 'subscribe', 'landing', 'dashboard'].forEach(function(page) {
        $stateProvider
            .state(page, {
                url: "/" + page,
                views: {
                    page: view(page, 'page')
                },
                onEnter: function($rootScope) {
                    $rootScope.modal = false;
                    console.log($rootScope);
                }
            });
    });
});

function MainCtrl() {}
function LandingCtrl() {}
function DashboardCtrl() {}