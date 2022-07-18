const {
  getfamillePdrService,
  getfamillePdrByidService,
  addfamillePdrService,
  updatefamillePdrService,
  deletefamillePdrService,
} = require("../famillePdr/famillePdrService");

getfamillePdrController = async (req, res) => {
  res.send(await getfamillePdrService());
};

getfamillePdrByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getfamillePdrByidService(gId));
};
addfamillePdrController = async (req, res) => {
  let famillePdr = req.body;

  res.send(await addfamillePdrService(famillePdr));
};
updatefamillePdrController = async (req, res) => {
  let famillePdr = req.body;
  res.send(await updatefamillePdrService(famillePdr));
};

deletefamillePdrController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deletefamillePdrService(gId));
};

module.exports = {
  getfamillePdrController,
  getfamillePdrByidController,
  addfamillePdrController,
  updatefamillePdrController,
  deletefamillePdrController,
};
