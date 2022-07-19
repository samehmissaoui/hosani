const {
  getDeviseService,
  getDeviseByidService,
  addDeviseService,
  updateDeviseService,
  deleteDeviseService,
} = require("../devise/deviseService");

getDeviseController = async (req, res) => {
  res.send(await getDeviseService());
};

getDeviseByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getDeviseByidService(gId));
};
addDeviseController = async (req, res) => {
  let Devise = req.body;

  res.send(await addDeviseService(Devise));
};
updateDeviseController = async (req, res) => {
  let Devise = req.body;
  res.send(await updateDeviseService(Devise));
};

deleteDeviseController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deleteDeviseService(gId));
};

module.exports = {
  getDeviseController,
  getDeviseByidController,
  addDeviseController,
  updateDeviseController,
  deleteDeviseController,
};
