// TAREA
// Imprimir la tabla del 5
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// Imports
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// Limpia la consola
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(`${ nombreArchivo.red } creado`.bgBlack))
  .catch(err => console.log(err));