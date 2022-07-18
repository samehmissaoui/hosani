
const express = require ('express');
const {getEquipementController,getEquipementbyidController,addEquipementController,updateEquipementController,deleteEquipementController}=require('./equipementController')

const equipementroute = express.Router();

equipementroute.get('/',getEquipementController);
equipementroute.get('/:id',getEquipementbyidController);
equipementroute.post('/',addEquipementController);
equipementroute.delete('/:id',deleteEquipementController);
equipementroute.put('/',updateEquipementController);


module.exports = equipementroute