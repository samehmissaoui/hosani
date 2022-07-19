const {
  getEmplacementService, getEmplacementByidService, addEmplacementService,
  updateEmplacementService, deleteEmplacementService
} = require("../emplacement/emplacementService");

getEmplacementController = async (req, res) => {
  res.send(await getEmplacementService());
};

getEmplacementByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getEmplacementByidService(gId));
};
addEmplacementController = async (req, res) => {
  let Emplacement = req.body;

  res.send(await addEmplacementService(Emplacement));
};
updateEmplacementController = async (req, res) => {
  let Emplacement = req.body;
  res.send(await updateEmplacementService(Emplacement));
};

deleteEmplacementController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deleteEmplacementService(gId));
};

module.exports = {
  getEmplacementController,
  getEmplacementByidController,
  addEmplacementController,
  updateEmplacementController,
  deleteEmplacementController,
};
