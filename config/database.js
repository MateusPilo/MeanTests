/**
 * Created by Mateus Pilo on 21/06/2017.
 */
var mongoose = require('mongoose');
module.exports = function (uri) {
    mongoose.connect(uri,{poolSize: 15});

    mongoose.connection.on('connected',function () {
       console.log('Mongo connectado em:'+uri);

    });

    mongoose.connection.on('disconnected',function () {
        console.log('Mongo Desconectado');

    });

    mongoose.connection.on('error',function (erro) {
        console.log('Mongo Erro em:'+erro);

    });

    process.on('SIGINT',function () {
        mongoose.connection.close(
            function () {
                console.log('Fechou mongo');
                process.exit(0);
            }
        );
    });
};
