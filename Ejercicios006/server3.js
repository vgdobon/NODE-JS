var fs = require('fs');

//Abrir('archivo','modo')
fs.open('prueba2.txt','w',function(err,file){
    if(err) throw err;
    console.log("Archivo vacio creado");

});