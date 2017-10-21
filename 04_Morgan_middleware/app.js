const express = require('express');

// Importación del módulo 'morgan'
const morgan = require('morgan');

// Iniciando servidor express
const app = express();

var port = 8000;

// Middlewares

// morgan middleware
app.use(morgan('dev'));

// middleware que obtiene la url
/*
app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use((req, res, next) => {
    console.log('MIDDLEWARE 1');
    next();
});

app.use((req, res, next) => {
    console.log('MIDDLEWARE 2');
    next();
})
*/

// Routes
app.get('/', (req, res) => {
    res.end('INDEX');
}); 

app.get('/p2', (req, res) => {
    res.end('PAGE 2');
});

app.get('/login', (req, res) => {
    res.end('Login page');
})

app.get('*', (req, res) => {
    res.end('URL no válida');
})
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});