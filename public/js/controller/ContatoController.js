/**
 * Created by Mateus Pilo on 13/06/2017.
 */
angular.module('contatooh').controller('ContatoController',
    function ($scope, $routeParams, Contato) {
        $scope.mensagem = {texto:'', status: ''};

        //var Contato = $resource('/contatos/:id');

        if($routeParams.idcontato) {

            Contato.get({id: $routeParams.idcontato},
                function (contato) {
                    console.log(contato);
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {texto:"Falha ao buscar contato",
                        status: 'erro'};
                    console.log(erro);
                }
            )
        }else{
            $scope.contato = {};
        }

        $scope.contato = new Contato();
        
        $scope.salva = function () {

            $scope.contato.$save()
                .then(function () {
                   $scope.mensagem = {texto:"Contato salvo com sucesso",
                                      status: 'success'};
                   $scope.contato = new Contato();
                })
                .catch(function (erro) {
                    $scope.mensagem = {texto:"Falha ao salvar contato",
                        status: 'erro'};
                    console.log(erro);
                });
        }


    }
);