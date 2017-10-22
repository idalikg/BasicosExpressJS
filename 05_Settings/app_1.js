const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 8000;

// Settings
    // Configuración de la app
    // app.set('variable_almacenadora','nombre_de_la_app');
app.set('nombreAPP','FIRST APP EXPRESS');

// Middlewares
app.use((req, res, next) => {
    console.log('MIDDLEWARE MANUAL');
    next();
});

app.use(morgan('dev'));
// Rutas
app.get('/', (req, res) => {
    res.end('PAGE 1');
})

app.get('/p2', (req, res) => {
    res.end('PAGE 2');
});

app.get('*', (req, res) => {
    res.end('URL NO VALIDA');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);

    // Impresión en consola el nombre de la app utilizando el método '.get()'
    console.log('Nombre de la APP: ' + app.get('nombreAPP'));
}); 
