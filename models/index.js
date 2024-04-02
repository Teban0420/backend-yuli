
const TypeVacation = require('./TypeVacation.js');
const AboutUs = require('./AboutUs.js');
const Reserve = require('./Reserve.js');

Reserve.belongsTo(TypeVacation, {foreingKey: 'TypeVacationId'});
Reserve.belongsTo(AboutUs, {foreingKey: 'AboutUsId'});

module.exports = TypeVacation;
module.exports = AboutUs;
module.exports = Reserve;
