

const express = require("express");
const {
    getSousfamilleEquipementController,
    getSousfamilleEquipementByidController,
    addSousfamilleEquipementController,
    updateSousfamilleEquipementController,
    deleteSousfamilleEquipementController,
} = require("../sousFamilleEquipement/sousFamilleEquipementController");

const SousfamilleEquipement = express.Router();

SousfamilleEquipement.get("/", getSousfamilleEquipementController);
SousfamilleEquipement.get("/:id",getSousfamilleEquipementByidController);
SousfamilleEquipement.post("/", addSousfamilleEquipementController);
SousfamilleEquipement.delete("/:id", deleteSousfamilleEquipementController);
SousfamilleEquipement.put("/", updateSousfamilleEquipementController);

module.exports = SousfamilleEquipement;
