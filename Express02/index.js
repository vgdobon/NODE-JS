var express =  require ('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    
   // res.render('index.pug',{titulo:"Camisetas guays", image:"images/camiseta2.png", color:"Gris"});
    res.render('index.pug',{rojo:"rojo",amarillo="Amarillo",verde="Verde",azul="azul"});
});


app.listen(3000 , function(){
    console.log("Activado en el puerto 3000");
});