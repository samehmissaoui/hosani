const express = require("express");
const {
  getfamilleEquipementController,
  getfamilleEquipementByidController,
  addfamilleEquipementController,
  updatefamilleEquipementController,
  deletefamilleEquipementController,
} = require("../familleEquipement/familleEquipementController");

const familleEquipement = express.Router();

familleEquipement.get("/", getfamilleEquipementController);
familleEquipement.get("/:id",getfamilleEquipementByidController);
familleEquipement.post("/", addfamilleEquipementController);
familleEquipement.delete("/:id", deletefamilleEquipementController);
familleEquipement.put("/", updatefamilleEquipementController);

module.exports = familleEquipement;
