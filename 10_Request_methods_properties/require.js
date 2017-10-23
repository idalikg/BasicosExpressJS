
// Módulos
const express = require('express');
const bodyParse = require('body-parser');
const app = express();

const port = 8000;

// Middlewares
app.use(bodyParse.urlencoded({extended:true}));

// PROPIEDADES Y MÉTODOS REQUEST
    // propiedad .params -> 1 solo valor
    app.get('/user/:id', (req, res) => {
        // res.end(`<h1>Método .params</h1>`);
        res.write(`Valor del id pasado enviado a través de la URL: ${req.params.id}`);
    });

    // propiedad .params -> varios valores
    app.get('/user2/:id-:nombre-:edad', (req, res) => {
        res.end(`Los valores enviados en la URL son: \nID: ${req.params.id} \nNOMBRE: ${req.params.nombre} \nEDAD: ${req.params.edad}`);
    });

    // propiedad .query 
    app.get(`/query`, (req, res) => {
        res.end(`El query de búsqueda es ${req.query.mySearch}`);
        /* Envio de búsqueda:
            /query?mySearch=alguna_palabra_frase
        */

    });

    // propiedad .path
    app.get('/prop1', (req, res) => {
        res.end(`El path de la URL es: ${req.path}`);
    });

// PROPIEDADES Y MÉTODOS RESPONSE
    // método .end()
    app.get('/', (req, res) => {
        res.end('<h1>INDEX</h1>');
    });

    // método .send() 
    app.get('/send', (req, res) => {
        res.send('<h1>ENVIANDO DATOS</h1>');
    });

    // método .redirect()
    app.get('/redirect', (req, res) => {
        res.redirect(300, 'localhost:8000/');
    });

    // método .json()
    app.get('/json', (req, res) => {
        res.json({
            "nombre" : "Luis",
            "edad" : 30
        });
    });

    // método .render() -> mostrará un vista HTML como respuesta, funcionará simepre y cuando se configure un motor ded plantillas
    /*app.get('/render', (req, res) => {
        res.render('render_view.html', (err, html) => {
            res.send(html);
        });
    });*/


// Servidor corriendo
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});