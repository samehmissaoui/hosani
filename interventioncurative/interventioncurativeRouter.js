const express = require ('express');
const { getinterventioncurativeController,getinterventioncurativeControllerByid,addinterventioncurativeController,
    updateinterventioncurativeController,deleteinterventioncurativeController} = require('../interventioncurative/interventioncurativeController');

const interventionroute = express.Router();

interventionroute.get('/',getinterventioncurativeController);
interventionroute.get('/:id',getinterventioncurativeControllerByid);
interventionroute.post('/',addinterventioncurativeController);
interventionroute.delete('/:id',deleteinterventioncurativeController);
interventionroute.put('/',updateinterventioncurativeController);


module.exports = interventionroute