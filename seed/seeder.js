const type_vacation = require('./type_vacation.js');
const aboutus = require('./aboutus.js');

const db = require('../config/db.js');
const TypeVacation = require('../models/TypeVacation.js');
const AboutUs = require('../models/AboutUs.js');


const importarDatos = async () => {
    try {
        // autenticar DB
        await db.authenticate()
        // generar las columnas
        await db.sync()
        // insertar los datos
        await Promise.all([
            TypeVacation.bulkCreate(type_vacation),
            AboutUs.bulkCreate(aboutus),
        ])
        console.log('datos importados correctamente')
        process.exit()
        
    } catch (error) {
        console.log(error)
        process.exit(1) // forma de terminar los procesos
    }
}

// funcion para eliminar datos
const eliminarDatos = async () => {
    
    try {
        await db.sync({force: true})
        console.log('datos eliminados correctamente');
        process.exit() // detengo el proceso
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

if(process.argv[2] === '-i'){
    importarDatos();
}
if(process.argv[2] === '-e'){
    eliminarDatos();
}