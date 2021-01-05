var mongoose = require('mongoose');

//CArga de módulos con modelo de datos
var author = require('./author');
var Book = require('./book');


mongoose.connect('mongodb://localhost/autores',function(err){
    if(err) throw err;
    console.log("Conexión establecida");

    var jamieAuthor = new author({
        _id: new mongoose.Types.ObjectId(),
        name:{
            firstName: 'Jamie',
            lastName: 'Munroe',
        },
        biography:"Author de Nodejs Javascript for beginners",
        twitter: "https://twitter.com/jmunroe",
        facebook: "https://facebook.com/jmunroe"
    });

    jamieAuthor.save(function(err){
        if(err) throw err;
        console.log("Autor guardado correctamente");
        var mcvBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: "ASP.NET y Javascript",
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Una lectura amena'
            }]

        });

        mcvBook.save(function(err){
            if(err) throw err;
            console.log("Lihbro guardado correctamente");
        });

        var jsBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: "Programación en Javascript",
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Un libro imprescindible'
            }]

        });
        jsBook.save(function(err){
            if(err) throw err;
            console.log("Libro guardado correctamente");
        });

    });

});