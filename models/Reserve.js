
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Reserves = db.define('reserve', {

    dispuesto: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    first_name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    },
    last_name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    },
    area_code: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    phone_number: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    type_of_vacation: {
        type: Sequelize.DataTypes.STRING       
    },
    many_travelers: {
        type: Sequelize.DataTypes.INTEGER
    },
    number_of_rooms: {
        type: Sequelize.DataTypes.INTEGER
    },
    type_accommodations: {
        type: Sequelize.DataTypes.STRING      
    },
    many_adults: {
        type: Sequelize.DataTypes.INTEGER
    },
    many_children: {
        type: Sequelize.DataTypes.STRING
    },
    celebrating_something: {
        type: Sequelize.DataTypes.STRING
    },
    destination_choice: {
        type: Sequelize.DataTypes.STRING
    },
    defarting_from: {
        type: Sequelize.DataTypes.STRING
    },
    departure_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    return_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    date_flexibles: {
        type: Sequelize.DataTypes.STRING
    },
    rent_a_car: {
        type: Sequelize.DataTypes.BOOLEAN
    },
    need_transfers: {
        type: Sequelize.DataTypes.BOOLEAN
    },
    desired_person_bucket: {
        type: Sequelize.DataTypes.STRING
    },
    travel_insurance: {
        type: Sequelize.DataTypes.STRING
    },
    arrangements: {
        type: Sequelize.DataTypes.STRING
    },
    anything_special: {
        type: Sequelize.DataTypes.TEXT
    }

});

module.exports = Reserves;