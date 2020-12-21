var mongoclient = require('mongodb');

var url = "mongodb://127.0.0.1:27017/";

mongoclient.connect(url,function(err,db){
    if(err){
       throw err; 
    }else{

        var dbo = db.db("ciudadesusa");
        var query ={city:"HONOLULU"};
        dbo.collection('citys').find(query).toArray(function(err,res){
            if(err){
                throw err;
            }else{
                console.log(res);
                db.close();            }
        });
    }

    });