const fs = require('fs');

//Todos los archivos en la ruta seleccionada(./ruta)
var files = fs.readdirSync('./');

files.forEach(file => {
    console.log(file)
//Salida ->> obj_fs.js
//           obj_os.js
//           obj_path.js
})
console.log(files);//Salida ->>   [ 'obj_fs.js', 'obj_os.js', 'obj_path.js' ]
console.log("Fin del programa");

