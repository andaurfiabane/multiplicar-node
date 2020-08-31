const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        default: 12,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar', 'Comando para listar por consola, la tabla de multiplicar solicitada.', options)
    .command('crear', 'Comando para generar archivo txt con la tabla de multiplicar solicitada en consola.', options)
    .help()
    .argv;

module.exports = { argv };