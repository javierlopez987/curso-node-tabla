// Imports
const fs = require('fs');
// import { writeFile } from 'fs';
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let factor;
    let salida = '';
    let consola = '';

    for (let index = 0; index < hasta; index++) {
      factor = index + 1;
      salida += `${base} x ${factor} = ${base * factor}\n`;
      consola += `${base} ${colors.green('x')} ${factor} ${colors.green('=')} ${base * factor}\n`;
    }
    if (listar) {
      console.log('=====================');
      console.log('Tabla del'.gray, colors.gray(base));
      console.log('=====================');
  
      console.log(consola);
    }
  
    fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    return `tabla-${ base }.txt`;
    
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo
};