  const {
    getMarqueService, getMarqueByidService, addMarqueService,
    updateMarqueService, deleteMarqueService
  } = require("../marque/marqueService");
  
  getMarqueController = async (req, res) => {
    res.send(await getMarqueService());
  };
  
  getMarqueByidController = async (req, res) => {
    let gId = req.params.id;
    res.send(await getMarqueByidService(gId));
  };
  addMarqueController = async (req, res) => {
    let Marque = req.body;
  
    res.send(await addMarqueService(Marque));
  };
  updateMarqueController = async (req, res) => {
    let Marque = req.body;
    res.send(await updateMarqueService(Marque));
  };
  
  deleteMarqueController = async (req, res) => {
    let gId = req.params.id;
    res.send(await deleteMarqueService(gId));
  };
  
  module.exports = {
    getMarqueController,
    getMarqueByidController,
    addMarqueController,
    updateMarqueController,
    deleteMarqueController,
  };
  