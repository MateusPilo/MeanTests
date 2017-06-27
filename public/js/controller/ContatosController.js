/**
 * Created by Mateus Pilo on 12/06/2017.
 */
angular.module('contatooh').controller('ContatosController',
    function ($scope, Contato) {

        $scope.total = 0;

        $scope.contatos = [];

        $scope.filtro = '';
        $scope.mesagem = {texto:''};

        //var Contato = $resource('/contatos');

        buscaContatos(Contato,$scope);

        //var Contatos = $resource('/contatos/:id');

        $scope.remover = function (contato) {
            Contato.delete({id:contato._id},
               function () {
                   buscaContatos(Contato,$scope);
               },
               function (erro) {
                   $scope.mensagem = {
                       texto:erro
                   };
                   console.log(erro);

               }
            );
        }

    }


);

function buscaContatos(Contato,$scope) {
    Contato.query(
        function (contatos) {
            $scope.contatos = contatos;
        },
        function (erro) {
            console.log(erro);
            $scope.mensagem = {
                texto:"Falha ao carregar os contatos"
            };
        }
    );
};
