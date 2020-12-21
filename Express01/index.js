var express =  require ('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    //res.send("<h1>Texto escrito desde express</h1>");
    res.sendFile('index.html');
});


app.listen(3000 , function(){
    console.log("Activado en el puerto 3000");
});