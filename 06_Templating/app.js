// Módulos
const express = require('express');
const ejs = require('ejs');

// Variables
const app = express();

const port = 8000;

// Settings

app.set('nomAPP','Templating'); // Nombre de la aplicación
app.set('views', __dirname + '/views'); // URL de la carpeta que almacena las vistas

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
app.get('', (req, res) => {
    res.render('index.ejs');
});

app.get('/p2', (req, res) => {
    res.render('page2.ejs');
});

app.get('*', (req, res) => {
    res.render('404.ejs');
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`Nombre de la apliación ${app.get('nomAPP')}`);
});
