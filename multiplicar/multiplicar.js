const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============================================.'.green);
    console.log(`============tabla de ${base}==============`.green);
    console.log('=============================================='.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`el valor : "${base}" no es un numero`);
            return;
        };

        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                return (err)
            else
                resolve(`tabla-${base}.txt`.green);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};