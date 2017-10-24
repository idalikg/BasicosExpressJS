
// Módulos
const express = require('express');

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();

const port = 8000;

// Middlewares

    // Analizador del objeto cookie
    app.use(cookieParser());

    // Creación de la cookie de sesión
    app.use(cookieSession({ secret : "Secreto" }));

// Rutas
app.get('/', (req, res) => {

    // Declaración del objeto cookie con el nombre 'vistas'
    req.session.vistas;

    // Variable que almacenará el conteo de las visitas a la ruta especificada
    var times;

    // Condicional para determinar la existencia de una sesión en ejecución
    if(req.session.vistas){ // si la cookie existe

        times = req.session.vistas++; // entonces times sumará 1 cada vez que se visite la ruta

    } else { // de lo contrario, si no existe aún una cookie

        req.session.vistas = 0; // entonces la cookie de sesión se iniciará con valor de cero

    }

    // Como respuesta en pantalla se mostrará el conteo total de visitas 
    res.end(`INDEX \n Número de visitas: ${times}`);

    // Prueba de conteo en consola
    // console.log(times);
});

// Servidor corriendo
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});