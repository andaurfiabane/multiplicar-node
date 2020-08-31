//Requires
const fs = require('fs');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';
        let path = 'tablas/';
        data += `.LOG\n`;

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }


        for (let i = 1; i <= limite; ++i) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //fs.writeFile(filename, data, callback) se espera una devolución de llamado
        fs.writeFile(`${path}tabla-${base}-del-1-al-${limite}.txt`, data, (err) => {
            if (!err) {
                resolve(`${path}tabla-${base}-del-1-al-${limite}.txt`);
            } else {
                reject(err);
            }
        })

    })

}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; ++i) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        try {
            resolve(data);
        } catch (error) {
            reject('Se ha producido un error al retornar la lista');
        }
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}