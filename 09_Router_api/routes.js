const express = require('express');

// Inicializar módulo Router de express
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/p2', (req, res) => {
    res.render('page2');
});


module.exports = router;