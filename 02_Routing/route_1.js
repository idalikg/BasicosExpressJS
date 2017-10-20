const express = require('express');

const app = express();

const port = 8000;

// Ruta 1 (inicial o raíz de la aplicación)
app.get('/', (req, res) =>{
    res.end('Index');
});

// Ruta 2
app.get('/page2', (req, res) => {
    res.end('Página 2');
});

// Ruta 3
app.get('/page3', (req, res) => {
    res.end('Página 3');
});

// Rutas no definidas -> con asterisco se está especificando que todas las rutas que se introduzcan, pero que sean diferentes a las definidas anteriormente, entonces deberá realizarse una acción determinada
app.get('*', (req, res) => {
    res.end('Ruta no válida');
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});