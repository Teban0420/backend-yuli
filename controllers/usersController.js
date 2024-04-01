
const TypeVacation = require('../models/TypeVacation.js');
const AboutUs = require('../models/AboutUs.js');
const Reserve = require('../models/index.js');

exports.FormUser = async (req, res) => {

   try {
    //    const type_vacation = await TypeVacation.findAll();
       const [type_vacation, aboutus] = await Promise.all([
            TypeVacation.findAll(),
            AboutUs.findAll(),
       ])
    
       return res.json({
            ok: true,
            type_vacation,
            aboutus
        });

   } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Algo salio mal'
        });     
   }
}

exports.crearReserve = async (req, res, next) => {

    const { dispuesto, email, first_name, last_name, area_code, phone_number, type_of_vacation,
            many_travelers, number_of_rooms, type_accommodations, many_adults, many_children,
           celebrating_something, destination_choice, defarting_from, departure_date,
           return_date, date_flexibles, rent_a_car, need_transfers, desired_person_bucket,
           travel_insurance, arrangements, anything_special,aboutuId
          } = req.body;

    const reserve = await Reserve.create({
          dispuesto,
          email,
          first_name,
          last_name,
          area_code,
          phone_number,
          type_of_vacation,
          many_travelers,
          number_of_rooms,
          type_accommodations,
          many_adults,
          many_children,
          celebrating_something,
          destination_choice,
          defarting_from,
          departure_date,
          return_date,
          date_flexibles,
          rent_a_car,
          need_transfers,
          desired_person_bucket,
          travel_insurance,
          arrangements,
          anything_special,
          aboutuId,    
    });

    res.status(200).json({msg: 'Creado correctamente'})

}
