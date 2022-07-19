const {
  getDepartementService, getDepartementByidService, addDepartementService,
  updateDepartementService, deleteDepartementService
} = require("./departementService");

getDepartementController = async (req, res) => {
  res.send(await getDepartementService());
};

getDepartementByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getDepartementByidService(gId));
};
addDepartementController = async (req, res) => {
  let Departement = req.body;

  res.send(await addDepartementService(Departement));
};
updateDepartementController = async (req, res) => {
  let Departement = req.body;
  res.send(await updateDepartementService(Departement));
};

deleteDepartementController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deleteDepartementService(gId));
};

module.exports = {
  getDepartementController,
  getDepartementByidController,
  addDepartementController,
  updateDepartementController,
  deleteDepartementController,
};
