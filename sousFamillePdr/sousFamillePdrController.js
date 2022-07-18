const {
  getsousFamillePdrService,
  getsousFamillePdrByidService,
  addsousFamillePdrService,
  updatesousFamillePdrService,
  deletesousFamillePdrService,
} = require("../sousFamillePdr/sousFamillePdrService");

getsousFamillePdrController = async (req, res) => {
  res.send(await getsousFamillePdrService());
};

getsousFamillePdrByidController = async (req, res) => {
  let gId = req.params.id;
  res.send(await getsousFamillePdrByidService(gId));
};
addsousFamillePdrController = async (req, res) => {
  let sousFamillePdr = req.body;

  res.send(await addsousFamillePdrService(sousFamillePdr));
};
updatesousFamillePdrController = async (req, res) => {
  let sousFamillePdr = req.body;
  res.send(await updatesousFamillePdrService(sousFamillePdr));
};

deletesousFamillePdrController = async (req, res) => {
  let gId = req.params.id;
  res.send(await deletesousFamillePdrService(gId));
};

module.exports = {
  getsousFamillePdrController,
  getsousFamillePdrByidController,
  addsousFamillePdrController,
  updatesousFamillePdrController,
  deletesousFamillePdrController,
};
