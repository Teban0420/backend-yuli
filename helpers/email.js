
const nodemailer = require('nodemailer');
const TypeVacation = require('../models/TypeVacation.js');
const AboutUs = require('../models/AboutUs.js');
const Reserve = require('../models/index.js');

const sendEmail = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const reserva = await Reserve.findByPk(datos.dataValues.id, {
        include: [
                {model: AboutUs, as: 'aboutu' },
        ]          
    });

    const {email, first_name, last_name, area_code, phone_number, type_of_vacation, many_travelers,
            number_of_rooms, type_accommodations, many_adults, many_children, celebrating_something, 
            destination_choice, defarting_from, departure_date, return_date, date_flexibles, rent_a_car,
            need_transfers, desired_person_bucket, travel_insurance, arrangements, anything_special, aboutu
         } = reserva
    
            // enviar email
    await transport.sendMail({
        from: 'clear-destinations.com',
        to: email, // a quien se envia
        subject: 'New Reserve A Vacation',
        text: 'New Reserve A Vacation',
        html: `
            <p>Hi Yuli, have a new reserve a vacation</p>
            <p>${first_name} ${last_name}</p>
            <p>${area_code} ${phone_number}</p>
            <p>type_of_vacation ${type_of_vacation}</p>
            <p>many_travelers ${many_travelers}</p>
            <p>number of rooms ${number_of_rooms}</p>
            <p>type accommodations ${type_accommodations}</p>
            <p>many adults ${many_adults}</p>
            <p>many children ${many_children}</p>
            <p>celebrating something ${celebrating_something}</p>
            <p>destination choice ${destination_choice}</p>
            <p>defarting from ${defarting_from}</p>
            <p>departure date ${departure_date}</p>
            <p>return date ${return_date}</p>
            <p>date flexibles ${date_flexibles}</p>
            <p>rent a car ${rent_a_car ? 'Yes' : 'No'}</p>
            <p>need transfers ${need_transfers ? 'Yes' : 'No'}</p>
            <p>desired person bucket ${desired_person_bucket}</p>
            <p>travel insurance ${travel_insurance}</p>
            <p>arrangements ${arrangements}</p>
            <p>anything special ${anything_special}</p>
            <p>hear about us ${aboutu.name_about_us}</p>            
        `
    });
}

module.exports = {
    sendEmail
}