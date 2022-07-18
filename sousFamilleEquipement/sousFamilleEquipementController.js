const {
  getSousfamilleEquipementService,
  getSousfamilleEquipementByidService,
  addSousfamilleEquipementService,
  updateSousfamilleEquipementService,
  deleteSousfamilleEquipementService,
} = require("../sousFamilleEquipement/sousFamilleEquipementService");

getSousfamilleEquipementController = async (req, res) => {
  res.send(await getSousfamilleEquipementService());
};

getSousfamilleEquipementByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getSousfamilleEquipementByidService(gId));
};
addSousfamilleEquipementController = async (req, res) => {
  let SousfamilleEquipement = req.body;

  res.send(await addSousfamilleEquipementService(SousfamilleEquipement));
};
updateSousfamilleEquipementController = async (req, res) => {
  let SousfamilleEquipement = req.body;
  res.send(await updateSousfamilleEquipementService(SousfamilleEquipement));
};

deleteSousfamilleEquipementController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deleteSousfamilleEquipementService(gId));
};

module.exports = {
  getSousfamilleEquipementController,
  getSousfamilleEquipementByidController,
  addSousfamilleEquipementController,
  updateSousfamilleEquipementController,
  deleteSousfamilleEquipementController,
};
