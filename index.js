var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('Blogs',schema,'blogs');

//Documento en RAM
var user = new User({
    title: 'el principito',
    author: 'Antonie ',
    body: '96'
});

//Documento en mongoDB
user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});

//Consulta General
User.find({}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);

    }
    console.log("<-----------Consulta General--------------->");
    console.log(docs);
});

//Consulta con restricciones
/*User.find({author: "Antonie"}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);

    }
    console.log("<-----------Consulta Con Restricción--------------->");
    console.log(docs);
});*/

//Actualización  con id existente
User.update({_id: "5c7800e649ba871297af7878"}, {$set: {hidden:"true"}},function(error,docs){
    if(error,docs){
        console.log(error);
        process.exit(1);
    }
    console.log("<------Actualización------>");
    console.log(docs);
    process.exit(0);
}); 

//Eliminación con id existente
User.findByIdAndRemove({_id:'5c78042f56707f165e81661b'}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});

