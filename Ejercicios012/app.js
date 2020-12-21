var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring = require('querystring');
var mysql=require('mysql');
var conexion=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'productos'
});
conexion.connect(error => {
  if (error)
    console.log('Problemas de conexion con mysql');
});
var mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  : 'audio/mpeg3',
   'mp4'  : 'video/mp4'
};
var servidor=http.createServer((req,res) => {
  var objetourl = url.parse(req.url);
  var ruta='public'+objetourl.pathname;
  if (ruta=='public/')
    ruta='public/index.html';
  enrutar(req,res,ruta);
});
servidor.listen(8888);
function enrutar (req,res,ruta) {
  switch (ruta) {
    case 'public/creartabla': {
      crear(res);
      break;
    }
    case 'public/alta': {
      alta(req,res);
      break;
    }
    case 'public/listado': {
      listado(res);
      break;
    }
    case 'public/consultaporcodigo': {
      consulta(req,res);
      break;
    }
      default : {
        fs.stat(ruta, error => {
          if (!error) {
              fs.readFile(ruta,(error,contenido) => {
            if (error) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.write('Error interno');
              res.end();
            } else {
              var vec = ruta.split('.');
              var extension=vec[vec.length-1];
              var mimearchivo=mime[extension];
              res.writeHead(200, {'Content-Type': mimearchivo});
              res.write(contenido);
              res.end();
            }
          });
        } else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
          res.end();
        }
      });
    }
  }
}
function crear(res) {
  conexion.query('drop table if exists articulos', (error,resultado) => {
    if (error)
      console.log(error);
  });
  conexion.query(`create table articulos (
                                           codigo int primary key auto_increment,
                                           descripcion varchar(50),
                                           precio float
                                         )`, (error,resultado) => {
    if (error) {
      console.log(error);
      return;
    }
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<!doctype html><html><head></head><body>
                  Se creo la tabla<br><a href="index.html">Volver</a></body></html>`);
  res.end();
}
function alta(req,res) {
  var info='';
  req.on('data', datosparciales => {
    info += datosparciales;
  });
  req.on('end', () => {
    var formulario = querystring.parse(info);
    var registro={
      descripcion:formulario['descripcion'],
      precio:formulario['precio']
    };
    conexion.query('insert into articulos set ?',registro, (error,resultado) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!doctype html><html><head></head><body>
                    Se cargo el articulo<br><a href="index.html">Volver</a></body></html>`);
    res.end();
  });
}
function listado(res) {
  conexion.query('select codigo,descripcion,precio from articulos', (error,filas) => {
    if (error) {
      console.log('error en el listado');
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    var datos='';
    for(var f=0;f<filas.length;f++){
      datos+='Codigo:'+filas[f].codigo+'<br>';
      datos+='Descripcion:'+filas[f].descripcion+'<br>';
      datos+='Precio:'+filas[f].precio+'<hr>';
    }
    res.write('<!doctype html><html><head></head><body>');
    res.write(datos);
    res.write('<a href="index.html">Volver</a>');
    res.write('</body></html>');
    res.end();
  });
}
function consulta(req,res) {
  var info='';
  req.on('data', datosparciales => {
    info += datosparciales;
  });
  req.on('end', () => {
    var formulario = querystring.parse(info);
    var dato=[formulario['codigo']];
    console.log(dato);
    conexion.query('select descripcion,precio from articulos where codigo=?',dato, (error,filas) => {
      if (error) {
        console.log('Error en la consulta');
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      var datos='';
      if (filas.length>0) {
        datos+='Descripcion:'+filas[0].descripcion+'<br>';
        datos+='Precio:'+filas[0].precio+'<hr>';
      } else {
        datos='No existe un artículo con dicho codigo.';
      }
      res.write('<!doctype html><html><head></head><body>');
      res.write(datos);
      res.write('<a href="index.html">Volver</a>');
      res.write('</body></html>');
      res.end();
    });
  });
}
console.log('Servidor web iniciado');