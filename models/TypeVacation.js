
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const TypeVacation = db.define('type_vacation', {

    name_type_vacation: {
        type: Sequelize.DataTypes.STRING(50)
    } 

});

module.exports = TypeVacation;