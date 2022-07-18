const express = require ('express');
const { getPanneController,sumPanneController} = require('../panne/panneController');

const Panneroute = express.Router();

Panneroute.get('/',getPanneController);
Panneroute.get('/sum',sumPanneController);

module.exports = Panneroute