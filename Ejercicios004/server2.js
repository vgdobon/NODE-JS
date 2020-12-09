var http = require('http');
var dt = require('./miPrimerModulo');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("El dia y la hora actual es " + dt.miDiaHora());
    res.end();
}).listen(4700);