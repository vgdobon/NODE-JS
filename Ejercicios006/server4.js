var fs = require('fs');

//SobrEscribe
fs.writeFile('prueba3.txt','Nuevo Texto',function(err,file){
    if(err) throw err;
    console.log("Archivo vacio creado");

});