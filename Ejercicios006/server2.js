var fs = require('fs');

//agrega al final
fs.appendFile('prueba2.txt','Texto de prueba',
function(err){
    if(err)throw err;
    console.log("Archivo creado");
});
