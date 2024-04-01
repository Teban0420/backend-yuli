
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const AboutUs = db.define('aboutus', {

    name_about_us: {
        type: Sequelize.DataTypes.STRING(50)
    } 

});

module.exports = AboutUs;