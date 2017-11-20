// Módulos
const express = require('express');
const bodyParser = require('body-parser');

// Variables
const port = 8000;
const app = express();

// Settings
app.set('nameAPP','Metodos_HTTP');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas --> Métodos HTTP

	// GET - obtención de datos del servidor
	app.get('/api/user', (req, res) => {
		// res.status(200).send('API de Usuarios');
		res.status(200).send({ usuarios:[ {"name":"luis",age:22},{"name":"José",age:30}]});

		/* Testear con la ruta: http://localhost:8000/api/user */
	});

	app.get('/api/user/:name', (req, res) => {
		res.send(`Hola ${req.params.name}`);
		
		/* Testear con la ruta: http://localhost:8000/api/user/nombre_usuario */
	});

	
	// POST - envío de datos al servidor
	app.post('/api/user', (req, res) => {
		console.log(req.body);
		res.status(200).send({ message: 'usuario registrado'});
	});


	// PUT - actualización de datos
	app.put('/api/user/:userID', (req, res) => {
		res.end(`Actualización del usuario ${req.params.userID}`);
		res.status(200).send({ message: 'Usuario actualizado'});
	});
	
	
	// DELETE - eliminar datos del servidor
	app.delete('/api/user/:userID', (req, res) => {
		res.end(`Eliminación del usuario ${req.params.userID}`);
		res.status(200).send({ message: 'Usuario eliminado'});
	});


// Servidor corriendo
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
	console.log(`Nombre de la aplicación: ${app.get('nameAPP')}`);
});