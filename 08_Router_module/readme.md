# **MÉTODO ROUTER**

##Express.js cuenta con el método ***Router()*** que permite manejar el direccionamiento de las URL´s de cada recurso de una aplicación. 

Los pasos para generar un manejador de rutas con el método *Router* es el siguiente:

**1.- Crear un archivo para declarar las rutas de la aplicación**

Por ejemplo, dentro de la carpeta del proyecto se crea el archivo *routes.js*, y dentro de este se debe requerir el módulo de *express*.  
Luego se debe declarar una variable en la cual se va a inicializar el uso del módulo *Router()*.

~~~
const express = require('express');

const router = express.Router();
~~~

> Cabe señalar que el archivo *router.js* será como el manejador de rutas de toda la aplicación.  

Posteriormente se procede a declarar las rutas tal y como se hace tradicionalmente, pero con la diferencia de que antes del método **.get()** se le debe preceder el nombre de la variable que inicializa el router.

Sintaxis: `router.get('url',calklback);`

Ejemplo:

~~~
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/404', (req, res) => {
    res.render('404');
}); 
~~~

Una vez declaras todas las rutas, por último se debe exportar la variable 'router'.

`module.exports = router;`

**2.- Habilitar el archivo de las rutas en el archivo principal de la aplicación**

Ahora bien, suponiendo que el archivo principal del servidor es **app.js**, lo siguiente a efectuar es declarar una variable donde se requiera el archivo de las rutas **routes.js**.

`const rutas = require('./routes.js');`

Luego, para añadir y habilitar el manejador de rutas, se debe pasar dicha variable a través de un middleware de la siguiente forma:

`app.use(rutas);`

Finalmente, se debe correr el servidor y verificar que el direccionamiento de rutas sea correcto.

> **NOTA:** *para no reiniciar el servidor desde la consola, y no refrescar el navegador manualmente, es posible instalar el módulo **nodemon*** de NPM para que los cambios dentro del archivo principal de la aplicación se detecten de manera automática. De igual manera para correr el servidor, dentro de la consola se debe ejecutar el siguiente comando: `nodemon app.js`.