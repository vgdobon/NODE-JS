var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200, {"Content-type" : "text/html"});
    switch(req.url){
        case '/':
            plantilla = "index.html";
            break;
        
        case '/nodejs':
            plantilla = "nodejs.html";
            break;

        default:
            plantilla ="404.html";
            break;
    }

    fs.readFile("./plantillas/" + plantilla, function(error,datos){

        res.write(datos);
        res.end();

    });

}).listen(3000 , 'localhost');