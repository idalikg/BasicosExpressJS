// Módulos
const express = require('express');
const ejs = require('ejs');

const app = express();

const port = 8000;

// Settings
    // Nombre de la aplicación
    app.set('nameAPP','multiTemplate');
    
    // Motor de plantillas HTML
    app.set('views', __dirname + '/views');
    app.set('view engine' , 'ejs');

// Middlewares
app.use((req, res, next) => {
    console.log('MIDDLEWARWE 1');
    next();
});

app.use((req, res, next) => {
    console.log('MIDDLEWARE 2');
    next();
});

// Rutas
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/p3', (req, res) => {
    res.render('page.ejs');
});

app.get('*', (req, res) => {
    res.render('404.ejs');
}); 

// Servidor corriendo
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`NOMBRE DE LA APLICAICÓN: ${app.get('nameAPP')}`);
})