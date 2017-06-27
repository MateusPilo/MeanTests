/**
 * Created by Mateus Pilo on 21/06/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var idSearch = new objectId('5949d23f62cd792ebba58238');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
    function (erro,db) {
        if(erro)
            throw err;
        db.collection('contatos').findOne({_id:idSearch},
            function (erro,contato) {
                if(erro)
                    throw err;
                console.log(contato);
            }
        );
        
    }

);
