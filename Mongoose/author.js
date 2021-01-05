var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/autores',function(err){
    if(err) throw err;
    console.log("Conexión establecida")
});

var userSchema = mongoose.Schema({
    nombre: {
        firstName: String,
        lastName: String
    },

    creado:Date
    
});

var authorShcema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        firstName: {
            type: String,
            required: true
        },
        lastName:{
            type: String
        }
    },
    biography: String,
    twitter:{
        type: String,
        validate:{
            validator: function(text){
                return text.indexOf('https://twitter.com/');
            }
        },
        message:'La cadena de twitter debe empezar por https://twitter.com/'
    },
    facebook:{
        type: String,
        validate:{
            validator: function(text){
                return text.indexOf('https://facebook.com/')===0;
            }
        },
        message:'La cadena de facebook debe empezar por https://facebook.com/'
    },
    linkedin:{
        type: String,
        validate:{
            validator: function(text){
                return text.indexOf('https://linkedin.com/')===0;
            }
        },
        message:'La cadena de linkedin debe empezar por https://linkedin.com/'
    },
    profilePicture: Buffer,
    created: {
        type : Date,
        default: Date.now
    }
});

var author = mongoose.model('Author',authorShcema);
module.exports = author;
