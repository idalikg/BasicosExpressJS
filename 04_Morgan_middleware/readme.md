# **MORGAN**

Es un middleware *logger* o registrador de peticiones HTTP para Node.js.

Este permite obtener tanto los **registros** de las solicitudes (request) enviadas al servidor, así como también las respuestas (response) generadas por el mismo.

## **Sintaxis básica Morgan:**

`const morgan = require('morgan');`  

`morgan('format');`

## **Formatos morgan**

Los siguientes formatos permiten obtener los registro de *solicitud-respuesta* en diferentes presentaciones. El uso de cada uno de estos dependerá directamente de los requerimientos del proyecto y a la información a saber.

-tiny
-combined
-common
-dev
-short

> Más información sobre Morgan: [NPM morgan](https://www.npmjs.com/package/morgan)
