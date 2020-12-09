var fs = require('fs')

//Renombrar archivo
fs.rename("prueba2.txt","prueba5.txt",function(err){
    if(err) throw err;
    console.log("Fichero renombrado con éxito")
})