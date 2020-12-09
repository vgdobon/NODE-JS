var url = require('url');
var http = require('http');
var adr = 'http://localhost:8080/default.html?year=2020&month=diciembre';

var q = url.parse(adr,true);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.host);
console.log(q.query);
console.log(q.search);
console.log(q.port);

var consulta = q.query;

console.log(consulta.year + "/" + consulta.month)