// Módulos
const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');

    // Requiriendo el manejador de rutas
    const rutas = require('./routes.js'); // rutas APP principal
    const rutas_api = require('./apiRouter.js'); // rutas APP secundaria (api-router)

    // Puerto
    const port = 8000;

    // Iniciando servidor
    const app = express();

// Settings
app.set('nameAPP','API-router');

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

// Middlewares
app.use((req, res, next) => {
    console.log('MIDDLEWARE');
    next();
});

app.use(morgan('dev'));

// Rutas
app.use(rutas); // APP principal

app.use('/api', rutas_api); // API

app.get('*', (req, res) => {
    res.render('404');
}); // Mensaje ERROR 404

// Servidor corriendo
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`Nombre del servidor: ${app.get('nameAPP')}`);
});