# **SETTINGS**

## **Motor de plantillas HTML**

El primer paso para la configuración de un motor de plantillas es la creación de la carpeta donde se han de almancenar los *templates* de las vistas HTML. Posteriormente, con el método *.set()* se debe especificar el nombre de dicha carpeta y la URL de la misma.

Sintaxis: `app.set( 'nombre-carpeta' , 'url-carpeta');`

Ejemplo: `app.set('views',__dirname + 'views');`

> El objeto global *__dirname* devuelve la ruta actual del archivo que se está trabajando la configuración del archivo. Y despúes se le concatena el nombre de la carpeta donde estarán las vistas.

Una vex hecho lo anterior, luego es necesario utilizar el mismo método *.set()* para que dentro de este se utilice la palabra reservada ***view engine***, y enseguida el nombre del motor de plantilla a utilizar.

Sintaxis: `app.set( 'view engine' , 'nombre-motor-plantilla');`

Ejemplo: `app.set('view engine','ejs');`

> En este caso se está designando el motor de plantilla 'EJS'; sin embargo es posible utilizar otros, tales como: JADE / PUG, Handlebars, doT, etc...

Ahora bien, para mostrar las vistas en pantalla, es requisito indispensable tener previamente creadas las plantillas en la carpeta ya especificada.  
Asimismo se debe contemplar la instalación del modulo NPM dentro del proyecto.  
Finalmente, para cargar dicha vista, se debe seleccionar la ruta que haya sido declarada con el método *.get()*, y dentro de este se debe especificar su carga con el método *.render()*.

Sintaxis: `res.render('nombre-vista.ext')`;

Ejemplo: 

~~~
app.get( '/login' , (req, res) => {  
    res.render('index.ejs');  
});
~~~