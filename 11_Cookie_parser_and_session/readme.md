# **COOKIE-PARSER & COOKIE-SESSION**

En toda aplicación cliente-servidor es posible tener ***cookies***, las cuales, son básicamente un objeto que se envía junto con la respuesta del servidor ante una solicitud. Esto permite conocer datos específicos sobre la comunicación entre el cliente y el servidor.

Cabe señalar que el objetivo de una *cookie* reside (principalmente) en identificar a los usuarios y obtener de ellos información relevante sobre sus visitas a un sitio o página web, por tanto, cuando se ingresa por primera vez a una página, sitio o aplicación web, se crea una *cookie* que posteriormente es almacenada en el navegador.

Los datos proporcionados por una *cookie* facilitan el trabajo y el manejo de sesiones, el número de visitas, el comportamiento de los usuarios.

Para trabajar con las *cookies* en Express.js es necesario instalar un módulo que trabajará como un *Middleware* el cual, 'parseará' o analizará las *cookies* que vienen junto con el objeto **Request** de una petición. El módulo a instalar es ***cookie-parser***, y se deberá requerir e implementar se la siguiente manera:

~~~
    // importación del módulo
    const cookieParser = require('cookie-parser');

    // declaración del middleware
    app.use(cookieParser());
~~~

### **Creación de una cookie de sesión**

Ahora bien, si se desea almacenar la sesión de un usuario dentro de una *cookie*, entonces se deberá instalar el módulo ***cookie-session*** que también es un *Middleware* que permite crear *cookies* de sesión.

Sintaxis:
~~~
    // importación del módulo 
    const cookieSession = require('cookie-session');

    // declaración del middleware
    app.use(cookieSession());
~~~

Adicionalmente el *Middleware* ***cookie-session*** permite crear y personalizar una *cookie*. Lo anterior es factible si dentro de este se especifica una serie de atributos y valores, tales como ***name, keys, secret***

Sintaxis ejemplo: `app.use(cookieSession({ secret : "Secreto" }));`


### ***Acceso y lectura de la cookie de sesión***

Ahora bien, una vez creada la *cookie* de sesión, y en caso de querer acceder a ella para obtener y manipular información sobre la misma, lo siguiente a realizar es invocarla del siguiente modo: `req.session.vistas`

La directiva **req.session** representa la sesión de la solicitud (request) que se está llevando a cabo.  
Mientras tanto, **.vista** es igual al nombre asignado para dicha cookie, por tanto, a este se le puede especificar cualquier valor como nombre.

> Más información sobre **cookie-parser**: [NPM cookie-parser](https://www.npmjs.com/package/cookie-parser)

> Más información sobre **cookie-session**: [NPM cookie-session](https://www.npmjs.com/package/cookie-session)


