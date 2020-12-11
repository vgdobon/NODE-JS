const http = require('http');

var servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200, {'Content-type':'text/html'});
    respuesta.write("<h1>El servidor funciona</h1>"+
    "<p>Mi parrafo</p>");
    respuesta.end();
}).listen(3000);


console.log("Servidor iniciado");
console.log("Escuchando por el puerto 3000");