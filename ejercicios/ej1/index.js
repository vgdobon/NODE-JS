var express = require('express');

var app = express();

app.set('view engine','jade');

app.get('/', function(req,res){
    res.render('index');

});

app.get('/contacto', function(req,res){
    res.render('contacto');

});

app.get('/info', function(req,res){



var datos = {
    "Nombre"   : "Antonio",
    "Apellido" : "Pérez",
    "Teléfono" : "555 555 555"
}

res.render('info',datos);


});