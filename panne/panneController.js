const {
  getPanneService,
  sumPanneService
  } = require("../panne/panneService");
  
  getPanneController = async (req, res) => {
    res.send(await getPanneService());
  };

  const sumPanneController = async (req, res) => {
    const sum = await sumPanneService()
 res.status(200).send({sum})
  
  };
  module.exports = {getPanneController,sumPanneController}