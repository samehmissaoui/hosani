const {
  getActionService, getActionByidService, addActionService,
  updateActionService, deleteActionService
} = require("../action/actionService");

getActionController = async (req, res) => {
  res.send(await getActionService());
};

getActionByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getActionByidService(gId));
};
addActionController = async (req, res) => {
  let Action = req.body;

  res.send(await addActionService(Action));
};
updateActionController = async (req, res) => {
  let Action = req.body;
  res.send(await updateActionService(Action));
};

deleteActionController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deleteActionService(gId));
};

module.exports = {
  getActionController,
  getActionByidController,
  addActionController,
  updateActionController,
  deleteActionController,
};
