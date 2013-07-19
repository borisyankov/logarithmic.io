/*
angular.module('logarithmic').provider('routing', function($rootScope,  $locationProvider) {

    $rootScope.$on('$locationChangeStart', function (event, next, current) {

        console.log('locationChangeStart ');
    });

    console.log('doooo');


    return this;
});
*/

/*

    function view(name, type) {
        return {
            templateUrl: '/html/' + type + 's/' + name + '.html',
            controller: name[0].toUpperCase() + name.slice(1) + 'Ctrl'
        }
    }

    this.configure = function() {
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

                //$routeProvider.when('/' + page, view(page, 'page'));

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
    };
*/
