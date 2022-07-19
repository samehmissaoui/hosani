const {
  getEtatMachineService, getEtatMachineByidService, addEtatMachineService,
  updateEtatMachineService, deleteEtatMachineService
  } = require("../etatMachine/etatMachineService");
  
  getEtatMachineController = async (req, res) => {
    res.send(await getEtatMachineService());
  };
  
  getEtatMachineByidController = async (req, res) => {
    let gId = req.params.id;
    res.send(await getEtatMachineByidService(gId));
  };
  addEtatMachineController = async (req, res) => {
    let etatMachine = req.body;
  
    res.send(await addEtatMachineService(etatMachine));
  };
  updateEtatMachineController = async (req, res) => {
    let etatMachine = req.body;
    res.send(await updateEtatMachineService(etatMachine));
  };
  
  deleteEtatMachineController = async (req, res) => {
    let gId = req.params.id;
    res.send(await deleteEtatMachineService(gId));
  };
  
  module.exports = {
    getEtatMachineController,
    getEtatMachineByidController,
    addEtatMachineController,
    updateEtatMachineController,
    deleteEtatMachineController,
  };