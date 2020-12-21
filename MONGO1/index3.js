var mongoclient = require('mongodb');

var url = "mongodb://127.0.0.1:27017/";

mongoclient.connect(url,function(err,db){
    if(err){
       throw err; 
    }else{
    var dbo = db.db('nodebase')
    var miobj = {nombre:"Pablo",apellido:"Romanos"};
    dbo.collection("prueba").insertOne(miobj,function(err,res){
        if(err){
            throw err;
        }else{
            console.log("Documento insertado");
            db.close();
        }
    });   
    }
});