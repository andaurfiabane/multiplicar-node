/* //Requires 
const fs = require('fs'); */
const argv = require('./config/yargs').argv; //Se obtiene solo el objeto argv desde el require, en caso contrario tendriamos
//que utilizar el objeto creado argv como argv.argv. Ej: argv.argv.limite
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const colors = require('colors');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(colors.green('============================'));
        console.log(colors.rainbow(`Tabla de ${argv.base}`));
        console.log(colors.green('============================'));
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let base = 2;
/* let data = '';
let path = 'tablas/';
data += `.LOG\n`;


for (let i = 1; i <= 12; ++i) {
    data += `${base} * ${i} = ${base * i}\n`;
}

//fs.writeFile(filename, data, callback) se espera una devolución de llamado
fs.writeFile(`${path}tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}) */

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];