const http = require('http');

var servidor = http.createServer();

servidor.on('connection', function(socket){
    console.log("Nueva conexion en el puerto 666");
    console.log(socket);
});
servidor.listen(3333);

console.log("Servidor iniciado");
console.log("Escuchando por el puerto 5000");
