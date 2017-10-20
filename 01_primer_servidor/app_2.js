const express = require('express');

const app = express();

const port = 8000;

// Creación de una petición al servidor
app.get('/', (req, res) => {
    res.end('Hola mundo con Express.js'); // Mensaje de respuesta al terminar la petición
});

// Corriendo servidor y envío a consola (callback) de un mensaje de confirmación sobre el correcto funcionamiento del mismo
app.listen(port, () => {
    console.log(`Servidor con ExpressJS corriendo en el puerto ${port}`);
});