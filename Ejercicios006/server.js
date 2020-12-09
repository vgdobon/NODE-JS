var http = require('http'); /*Modulo requerido http  */
var fs = require('fs');

http.createServer(function(peticion,respuesta){
    //Abrir archivo
    fs.readFile('demo.html',function(err,data){
        respuesta.writeHead(200, {"Content-Type":"text/html"});
        respuesta.write(data);
        return respuesta.end();
    })
}).listen(666);
