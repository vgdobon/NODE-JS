var fs = require('fs');

//Eliminar archivo
fs.unlink('prueba.txt',function(err){
    if(err) throw err;
    console.log("Se ha borrado")
})