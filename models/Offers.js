const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Offer = db.define('offer', { 

    title: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.DataTypes.STRING(255)
    },
    dateStart: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    dateEnd: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Offer;  