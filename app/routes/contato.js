/**
 * Created by Mateus Pilo on 08/06/2017.
 */
module.exports = function (app) {
    var controller = app.controllers.contato;
    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvarContato)
        .put(controller.salvarContato);

    app.route('/contatos/:id')
        .get(controller.getContato)
        .delete(controller.removerContato);

};