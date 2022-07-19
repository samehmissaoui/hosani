const {
  getRoleService, getRoleByidService, addRoleService,
  updateRoleService, deleteRoleService
  } = require("../role/roleService");
  
  getRoleController = async (req, res) => {
    res.send(await getRoleService());
  };
  
  getRoleByidController = async (req, res) => {
    let gId = req.params.id;
    res.send(await getRoleByidService(gId));
  };
  addRoleController = async (req, res) => {
    let Role = req.body;
  
    res.send(await addRoleService(Role));
  };
  updateRoleController = async (req, res) => {
    let Role = req.body;
    res.send(await updateRoleService(Role));
  };
  
  deleteRoleController = async (req, res) => {
    let gId = req.params.id;
    res.send(await deleteRoleService(gId));
  };
  
  module.exports = {
    getRoleController,
    getRoleByidController,
    addRoleController,
    updateRoleController,
    deleteRoleController,
  };
  