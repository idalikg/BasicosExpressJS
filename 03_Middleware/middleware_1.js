const express = require('express');

const app = express();

const port = 8000;

// MIDDLEWARES
app.use( (req, res, next) => {
    console.log(`URL de la request ${req.url}`);
    next();
});

app.use( (req, res, next) => {
    // res.end('Middleware 2');
    console.log('Mid 2');
    next();
})

// RUTAS
app.get('/', (req, res) => {
    res.end('Pagina 1 -> index');
});

app.get('/page2', (req, res) => {
    res.end('Pagina 2');
});

app.get('*', (req, res) => {
    res.end('URL no valida');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})