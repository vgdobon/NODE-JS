//Carga de librerías
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
http.createServer(function(request, response){
  console.log('Peticion ', request.url);
  var objurl = url.parse(request.url);
  var filePath = 'public'+ objurl.pathname;
  if(filePath == 'public/'){
    filePath = 'public/index.html';
  }
  var extname = String(path.extname(filePath)).toLowerCase();
  var mimeTypes = {
    '.html': 'text/html',
    '.css' : 'text/css',
    '.js'  : 'text/javascript',
    '.json': 'application/json',
    '.jpg' : 'image/jpg',
    '.eot' : 'application/vnd.ms-font-object',
    '.svg' : 'image/svg+xml',
    '.ttf' : 'application/font-ttf',
    '.woff': 'application/font-woff',
    '.woff2': 'application/font-woff2',
  };
  var contentType = mimeTypes[extname];
  fs.readFile(filePath, function(error, content){
    if(error){
      if(error.code == 'ENOENT'){
        fs.readFile('./404.html', function(error, content){
          response.writeHead(404, {'Content-Type': 'text/html'});
          response.end(content, 'utf-8');
        });
      }else{
        response.writeHead(500);
        response.end('No se ha podido conectar con el servidor');
      }
    } else {
      response.writeHead(200, {'Content-Type': contentType});
      response.end(content, 'utf-8');
    }
  });
}).listen(666);
console.log("Servidor activo en localhost:666");