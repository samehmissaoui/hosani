const express = require ('express');
const { getPanneController,sumPanneController} = require('../panne/panneController');

const routePanne = express.Router();

routePanne.get('/',getPanneController);
routePanne.get('/sum',sumPanneController);

module.exports = routePanne