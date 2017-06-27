/**
 * Created by Mateus Pilo on 22/06/2017.
 */
var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({

        nome:{
            type:String,
            required:true
        },
        email:{
            type: String,
            required: true,
            index:{
                unique:true
            }
        }


    });

    return mongoose.model('Contato',schema);
};