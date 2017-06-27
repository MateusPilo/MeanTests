/**
 * Created by Mateus Pilo on 20/06/2017.
 */
angular.module('contatooh').factory('Contato', function ($resource) {
    return $resource('contatos/:id');
});