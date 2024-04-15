
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const adminController = require('../controllers/adminController');

// middle para proteger las rutas
const auth = require('../middeware/auth.js');

module.exports = function(){

    // rutas publicas
    router.get('/new_reserve', usersController.FormUser);
    router.post('/new_reserve', usersController.crearReserve);    

    // admin
    router.post('/login', adminController.autenticarAdmin);
    router.post('/crear-admin', adminController.crearAdmin);
    // router.get('/all', auth, adminController.AllUsers);
    // router.delete('/users/:id', auth, adminController.eliminarUser);
    // router.put('/llamar_user/:id', adminController.llamarUser);

    return router;
}