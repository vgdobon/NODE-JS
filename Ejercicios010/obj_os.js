const os = require('os');

console.log("Nombre de maquina: "+ os.hostname());
//Salida -->> Nombre de maquina: DESKTOP-TA6EURS
console.log("Arquitectura: " + os.arch());
//Salida -->> Arquitectura: x64
console.log("Plataforma: " + os.platform());
//Salida -->> Plataforma: win32
console.log("Memoria Total: " + os.totalmem());
//Salida -->> Memoria Total: 4294168576   ->>Bytes




