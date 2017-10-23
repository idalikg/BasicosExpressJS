# **OBJETOS REQUEST Y RESPONSE**

## Tanto el objeto ***request*** como el ***response*** de una petición HTTP cuentan con propiedades y métodos que permiten manipular y trabajar con las solicitudes enviadas al servidor y las respuestas que este devuelve.

### Métodos y Propiedades del objeto ***Request***

- **.params** *(propiedad)*
Permite obtener los valores que se están enviando a través del navegador hacia el servidor. Cuando se envía un solo valor, a la URL declarada en la ruta se le debe concatenar el nombre de la variable que se va a enviar seguido de dos puntos y seguido *:*.

Ejemplo: 
~~~
    app.get('/user/:id', (req, res) => {
        res.end( ${req.params.id} );
    });
~~~

En caso de querer enviar más de un valor en la URL, entonces, despúes de la declaración de cada variable en la ruta se debe ir especificando cada una de manera consecutiva. Lo anterior se consigue separando cada variable por un guión medio y dos puntos y seguido '-:'.

Ejemplo:
~~~
    app.get('/user2/:id-:nombre-:edad', (req, res) => {
        res.end(ID: ${req.params.id} NOMBRE: ${req.params.nombre} EDAD: ${req.params.edad});
    });
~~~

- **.query** *(propiedad)*
Guarda y devuelve en una variable un string de búsqueda que se envía a través de la URL

Ejemplo: 
~~~
    app.get('/query', (req, res) => {
        res.end(${req.query.mySearch});
    });
~~~

La variable ***mySearch*** es igual al nombre de la variable que guardará el string de búsqueda, por lo que para obtenerla es necesario, que además de la ruta especificada también se dconcatene el string **?mySearch=palabra_frase_buscar**.

Sintaxis URL: `http://localhost:8000/query?mySearch=hola` -> devolverá la palabra 'hola'

- **.path** *(propiedad)*
Permite trabajar con la URL´s de las rutas especificadas en el manejador de rutas.

Ejemplo:
~~~
    app.get('/prop1', (req, res) => {
        res.end(`El path de la URL es: ${req.path}`);
    });
~~~

Lo anterior devolverá misma ruta **/prop1**.

### Métodos y Propiedades del objeto ***Response***

- **.end()** *(método)*
Finaliza el envío de respuesta del servidor.

- **.send()** *(método)*
Envia datos a la respuesta de una petición HTTP.

- **.redirect()** *(método)*
Redirecciona una ruta ya especificada en el manejador de rutas hacia otra URL.

- **.json()** *(método)*
Devuelve como respuesta la información de una petición efectuada al servidor en un objeto JSON, y a la vez lo convierte a un string.

- **.render()** *(método)*
Como respuesta ante una petición HTTP, permite mostrar una vista HTML al cliente (navegador).  
Por lo regular, este método funcionará correctamente cuando se configura un motor ded plantillas.