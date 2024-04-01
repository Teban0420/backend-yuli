
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamp: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // 30 segundos tiempo que va tratar de realizar una conexion
        idle: 10000 // 10 segundos para que finalice la conexion si nadie esta coenctado
    }
});

module.exports = db;