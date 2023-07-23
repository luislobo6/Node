const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear()


// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')

// console.log(argv);

// console.log('base: yargs', argv.base);

const base = argv.base; // argv.b
const listar = argv.listar; // argv.l
const hasta = argv.h;

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))
