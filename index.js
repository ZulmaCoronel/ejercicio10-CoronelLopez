var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var Blog = mongoose.model('Blog',schema,'blogs');

//Agregar blog

var blog1 = new Blog({
    title:'Ciudades de Papel',
    author:'Jonh Green',
    body:'Le gustaban tanto los misterios que se convirtio en uno.',
    comments:[{body:'Regular', date:'1/05/2018'}],
    meta: {votes:3, favs:4}
})


//Documento en mongoDB
blog1.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});

//Consulta General
Blog.find({}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);

    }
    console.log("<-----------Consulta General--------------->");
    console.log(docs);
});

//Consulta con restricciones
/*Blog.find({author: "Antonie"}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);

    }
    console.log("<-----------Consulta Con Restricción--------------->");
    console.log(docs);
});*/

//Actualización  con id existente
Blog.update({_id: "5c7800e649ba871297af7878"}, {$set: {hidden:"true"}},function(error,docs){
    if(error,docs){
        console.log(error);
        process.exit(1);
    }
    console.log("<------Actualización------>");
    console.log(docs);
    process.exit(0);
}); 

//Eliminación con id existente
Blog.findByIdAndRemove({_id:'5c78042f56707f165e81661b'}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("--------Borrado--------")
    console.log(docs);
    process.exit(0);
});

