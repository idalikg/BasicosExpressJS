# **CONCEPTOS BÁSICOS MIDDLEWARES**

## ***Middleware***
Funciones que se ejecutan en orden y no sóolo tienen acceso tanto al objeto del requerimiento del cliente (req) y al objeto de la respuesta del servidor (res), también acceden a la función middleware siguiente existente dentro del flujo de requerimientos y respuestas.

## ***.use()***
Función que permite declarar un *middleware*.  Dependiendo el tipo de Middleware puede recibir ciertos número de parámetros.

* **Middleware de apliación**
Son funciones que reciben una función *callback* la cual, a su vez recibe tres parámetros: 1) Objeto *req* , 2) Objeto *res*, 3) Palabra reservada *next*.

Ejemplo:  app.use( (req, res, next) => {  // code  next();  });

*next()* permite salir del middleware actual y pasar a la siguiente.

