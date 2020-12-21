var mongoclient = require('mongodb');

var url = "mongodb://127.0.0.1:27017";

mongocliente.connect(url,function(err,db){
    if(error){
        throw err;
    }else{
        console.log("Basse de datos creada");
        db.close();
    }
});