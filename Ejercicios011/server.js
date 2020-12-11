var http = require('http');
var url = require('url');
var fs = require('fs');

var mime = {
    'html': 'text/html',
    'css' : 'text/css',
    'jpg' : 'image/jpg',
    'ico' : 'image/x-icon',
    'mp3' : 'audio/mpeg3',
    'mp4' : 'video/mp4'
};


var servidor = http.createServer((peticion,respuesta)=>{
    var objetourl = url.parse(peticion.url);
    var ruta = 'static' + objetourl.pathname;

    if (ruta =='static/'){
        ruta = 'static/index.html';
    }
    fs.stat(ruta , error =>{
        if(!error){
            fs.readFile(ruta, (error,contenido)=>{
                if(error){
                    respuesta.writeHead(500,{"Content-Type":"text/plain"});
                    respuesta.write("Error del servidor");
                    respuesta.end();

                }else{
                    var vec = ruta.split('.');
                    var extension = vec[vec.lenght -1];
                    var mime_archivo = mime[extension];
                    respuesta.writeHead(200, {"Content-Type": mime_archivo});
                    respuesta.write(contenido);
                    respuesta.end();
                }
            });
        }else{
            respuesta.writeHead(404 , {"Content-Type" : "text/html"});
            respuesta.write('<!doctype><html><head><title>Error 404</title></head><body><h1>Archivo no encotrado</h1></body></html>');
            respuesta.end();
        }
    });
});


servidor.listen(7777);
console.log("Servidor web iniciado");