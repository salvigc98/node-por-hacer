const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];  
    }
    
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    if (listadoPorHacer.splice(listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion), 1)) {
        guardarDB();
        return true;
    } else {
        return false;
    }
    
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};