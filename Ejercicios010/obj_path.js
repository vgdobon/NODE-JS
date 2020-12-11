var path = require('path');

//Nos dice la ruta del archivo actual
console.log(__filename);
//  Salida -->>   I:\FORMATEA\FullStack\NODE-JS\Ejercicios010\obj_path.js

var path_Obj = path.parse(__filename);
console.log(path_Obj);
//  Salida -->>
// {
//     root: 'I:\\',
//     dir: 'I:\\FORMATEA\\FullStack\\NODE-JS\\Ejercicios010',
//     base: 'obj_path.js',
//     ext: '.js',
//     name: 'obj_path'
//   }
