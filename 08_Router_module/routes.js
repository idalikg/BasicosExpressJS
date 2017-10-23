// ARCHIVO MANEJADOR DE RUTAS

// Módulo Express
const express = require('express');

// Variable que almacena el uso del método 'Router()' de Expres.js
const router = express.Router();

// Rutas
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/p2', (req, res) => {
    res.render('page2');
});

router.get('/404', (req, res) => {
    res.render('404');
}); 

// Exportar la varariable del router
module.exports = router;