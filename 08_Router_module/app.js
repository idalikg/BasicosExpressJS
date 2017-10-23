// Módulos
const express = require('express');
const ejs = require('ejs');

    // Importación del módulo del manejador de rutas
    const rutas = require('./routes.js');

const app = express();

// Variables
const port = 8000;

// Settings
    // Nombre de la aplicación
    app.set('nameAPP', 'RouterAPP');

    // Motor de plantillas HTML
    app.set('views' + __dirname + '/views');
    app.set('view engine','ejs');

// Middlewares
app.use((req, res, next) => {
    console.log('MIDDLEWARE 1');
    next();
});

app.use((req, res, next) => {
    console.log('MIDDLEWARE 2');
    next();
});

// Rutas
    // Paso de 'rutas' a través de un middleware para habilitar el manejador de rutas
    app.use(rutas);

// Servidor corriendo
app.listen(port, () => {
    console.log(`NOMBRE DEL SERVIDOR ${app.get('nameAPP')}`);
    console.log(`Servidor corriendo en el puerto ${port}`);
});