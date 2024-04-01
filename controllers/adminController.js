
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin.js');
// const Usuarios = require('../models/Usuarios.js');
// const Agua_proveniente = require('../models/Agua_proveniente.js');
// const Casado = require('../models/Casado.js');
// const Edad = require('../models/Edad.js');
// const Personas_hogar = require('../models/Personas_hogar.js');

// exports.crearAdmin = async (req, res, next) => {

//     const { email, password } = req.body;
//     const existeAdmin = await Admin.findOne({ where: {email}});

//     if(existeAdmin){
//         await res.status(400).json({msg: 'El usuario ya esta registrado'});
//         next();
//     }    
    
//     const admin = await Admin.create({
//         email,
//         password
//     });

//     res.status(200).json({msg: 'Admin creado correctamente'});
// }

// exports.autenticarAdmin = async (req, res, next) => {
    
//     const { email, password } = req.body;
//     const admin = await Admin.findOne({ where: {email} });   

//     if(!admin){
//         await res.status(401).json({msg: 'El usuario no existe'});
//         next();
//     }
//     else{
//         // el usuario existe verifico el password
//         if(!admin.verificarPassword(password)){
//             // password incorrecto
//             await res.status(401).json({msg: 'Password Incorrecto'});
//             next();
//         }        
//         else {
//             // password correcto, firmar token
//             const token = jwt.sign({
//                 email : admin.email,
//                 id: admin.id
//             },
//              'LLAVESECRETA',
//              {
//                 expiresIn: '5h'
//              });
//              // retornar token
//              res.json({token});
//         }

//     }
    
// }

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

// exports.llamarUser = async(req, res) => {

//     const { id } = req.params;
    
//     const usuario = await Usuarios.findByPk(id);
//     if(!usuario){
//         return res.status(400).json({msg: 'No existe el usuario'});        
//     }

//     usuario.llamado = !usuario.llamado;
//     await usuario.save();

//     res.json({
//         resultado: true
//     })
// }