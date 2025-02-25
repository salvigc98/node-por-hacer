const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Maraca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'lista todas las tareas')
    .command('borrar', 'borra una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    };