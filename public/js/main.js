angular.module('contatooh',['ngRoute','ngResource'])
    .config(function ($routeProvider, $locationProvider) {


        $routeProvider .when("/contatos",{
            templateUrl:'partials/contatos.html',
            controller:'ContatosController'

        })

        .when("/contato/:idcontato",{
            templateUrl:'partials/contato.html',
            controller:'ContatoController'

        })
        .when("/contato",{
            templateUrl: "partials/contato.html",
            controller:'ContatoController'
        });

        $routeProvider.otherwise({redirectTo: '/contatos'});


        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    });