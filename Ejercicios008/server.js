var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(peticion,respuesta){
    var q = url.parse(peticion.url, true)
    var filename = "." + q.pathname;
    fs.readFile(filename ,function(err,data){
        if(err) {
            respuesta.writeHead(404,{"Content-Type":"text/html"});
            return respuesta.end("Error 404. Fichero no encontrado")
        }
        respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write(data);
        return respuesta.end();
    })
}).listen(3000);