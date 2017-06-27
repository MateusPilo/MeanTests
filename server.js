/**
 * Created by Mateus Pilo on 04/04/2017.
 */
var htpp = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://127.0.0.1:27017/contatooh');

htpp.createServer(app).listen(app.get('port'),function () {
    console.log('Express Server escutando na porta '+app.get('port'));
    
});
