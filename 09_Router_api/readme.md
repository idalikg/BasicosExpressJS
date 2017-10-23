# **API ROUTER**

##Una **API** es un tipo de aplicación en la cual, básicamente se envían datos desde el servidor al cliente (es decir, el navegador), siempre y cuando este último le solicite una ruta en específico.

Al crear una API el manejo de rutas es de manera agrupada y directamente relacionadas a una sola URL, de tal modo que al ingresar a la ruta raíz de una API, se tiene acceso a recursos específicos para la misma. 

Para generar el manejador de rutas de una API, es necesario crear un archivo adicional al de las ruteo de la aplicación principal. Para el caso de este ejercicio, además del archivo **routers.js** también se tiene el archivo **apiRoutes.js** donde se declaran las rutas de la API. 

Al igual que en el primer archivo, también se debe exportar la variable que instancia el router para posteriormente importarla en el archivo principal de la aplicación **app.js**. Asimismo se debe habilitar dicho ruteo a través de un Middleware de la siguiente manera:

~~~
app.use(rutas); // habilitar manejador de rutas de la APP principal

app.use('/api', rutas_api); // habilitar manejador de rutas de la API
~~~

Como se puede ver en el código anterior, en el segundo Middleware, como primer parámetro se debe especificar la URL que tendrá la API. Para el caso de este ejemplo se asigna **/api** como la ruta raíz de la API, por tanto, únicamente se podrá acceder a sus recursos siempre y cuando se le anteceda dicha URL.

**RUTAS NO VÁILIDAS & ERROR 404**

Ahora bien, en caso de ingresar una URL que no sea válida, es decir, que no esté declarada en ningún manejador de rutas, entonces se le deberá informar al usuario que no se encontró algún recurso para dicha ruta solicitada. Por ejemplo, si sucede lo anterior, se tiene el *template* **404.ejs** que mostrará en pantalla el mensaje de error HTTP 404.

La ruta de la vista de error se debe especificar dentro del archivo de la aplicación principal **app.js**. Aunque cabe señalar que esta ruta debe incorporarse despúes de la declaración de los Middlewares que habilitan los manejadores de rutas de la aplicación principal y de la API, ya que en caso de que no se encuentre ninguna ruta que coincida con las declaradas previamente, entonces, como último recurso se deberá mostrar el mensaje de error.

~~~
app.get('*', (req, res) => {
    res.render('404');
});
~~~

El asterisco, como primer parámetro significa que para todas aquellas rutas que no hayan sido encontradas dentro de los manejadores de rutas, entonces se deberá renderizar el *template* **404.ejs**.  
Como ejercicio, en dicha vista es factible ver dos *links* que permitirán ir a la aplicación principal, o bien, hacia la API. Sin embargo, para que dichos enlaces funcionen, en su propiedad *href* se asigna como valor la ruta especificada en cada uno de los Middlewares declarados en el archivo prinicipal de la aplicación **app.js**.

~~~
    <li><a href="/">APP principal</a></li>
    <li><a href="/api">API</a></li>
~~~

Esto último permite ejemplificar la manera en como se puede especificar URL´s de redirreccionamiento básico de una API u otra aplicación a partir de enlaces.

Finalmente, se debe correr el servidor y verificar que el direccionamiento de rutas es correcto.

> **NOTA:** *para no reiniciar el servidor desde la consola, y no refrescar el navegador manualmente, es posible instalar el módulo **nodemon*** de NPM para que los cambios dentro del archivo principal de la aplicación se detecten de manera automática. De igual manera para correr el servidor, dentro de la consola se debe ejecutar el siguiente comando: `nodemon app.js`.