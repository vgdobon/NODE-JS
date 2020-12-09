var http = require('http');
​
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h2>Servidor activo con nodemon</h2>");
}).listen(3000);
