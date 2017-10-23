const express = require('express');

const routes_api = express.Router();

routes_api.get('/', (req, res) => {
    res.render('api_route_view');
});

module.exports = routes_api;