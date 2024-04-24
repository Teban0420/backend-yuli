
const jwt = require('jsonwebtoken');
const Login = require('../models/Login.js');
const Offer = require('../models/Offers.js');


exports.crearAdmin = async (req, res, next) => {

    const { email, password } = req.body;

    const existeAdmin = await Login.findOne({ where: {email}});

    if(existeAdmin){
        await res.status(400).json({msg: 'El usuario ya esta registrado'});
        next();
    }    
    
    const admin = await Login.create({
        email,
        password
    });

    res.status(200).json({msg: 'Admin creado correctamente'});
}

exports.autenticarAdmin = async (req, res, next) => {
    
    const { email, password } = req.body;

    const admin = await Login.findOne({ where: {email} });   

    if(!admin){
        await res.status(401).json({msg: 'El usuario no existe'});
        next();
    }
    else{
        // el usuario existe verifico el password
        if(!admin.verificarPassword(password)){
            // password incorrecto
            await res.status(401).json({msg: 'Password Incorrecto'});
            next();
        }        
        else {
            // password correcto, firmar token
            const token = jwt.sign({
                email : admin.email,
                id: admin.id
            },
             'LLAVEULTRA_SUPERSECRET@',
             {
                expiresIn: '5h'
             });
             // retornar token
             res.json({token});
        }

    }
    
}

// exports.AllUsers = async (req, res) => {   

//     try {

//         const usuarios = await  Usuarios.findAll({           
//             include: [
//                 {model: Agua_proveniente, as: 'agua_proveniente'},
//                 {model: Casado, as: 'casado'},
//                 {model: Edad, as: 'edad'},
//                 {model: Personas_hogar, as: 'personas_hogar'},
//             ]
//         })

//         res.json({
//             usuarios            
//         });
        
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// exports.eliminarUser = async( req, res) => { 

//     const { id } = req.params;   

//     const usuario = await Usuarios.findByPk(id);    

//     if(!usuario){
//         return res.status(400).json({msg: 'No existe el usuario'});        
//     }

//     await usuario.destroy();
//     res.status(200).json({msg: 'Registro Eliminado'})
 
// }

exports.newOffer = async (req, res) => {

    const {title, description, dateStart, dateEnd, image } = req.body;

    try {
        
        const offer = await Offer.create({
            title, 
            description, 
            dateStart, 
            dateEnd, 
            image
        });
    
        res.status(200).json({msg: 'Created'});

    } catch (error) {
        console.log(error)
    }

}

exports.allOffers = async (req, res) => {

    try {

        const offers = await Offer.findAll()
            
        res.json({
            ok: true,
            offers            
        });
        
    } catch (error) {
        console.log(error)
        
    }

}

exports.deleteOffer = async (req, res) => {

    const { id } = req.params; 

    try {

        const offer = await Offer.findByPk(id);    

        if(!offer){
            return res.status(400).json({msg: 'No existe el usuario'});        
        }

        await offer.destroy();
        res.status(200).json({msg: 'Registro Eliminado'})
        
    } catch (error) {
        res.status(500).json({msg: 'Something Wrong'})
    }
   
}