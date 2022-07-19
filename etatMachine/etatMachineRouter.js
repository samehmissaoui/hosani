
const express = require("express");
const {
    getEtatMachineController,
    getEtatMachineByidController,
    addEtatMachineController,
    updateEtatMachineController,
    deleteEtatMachineController,
} = require("../etatMachine/etatMachineController");

const etatMachineRoute = express.Router();

etatMachineRoute.get("/", getEtatMachineController);
etatMachineRoute.get("/:id",getEtatMachineByidController);
etatMachineRoute.post("/", addEtatMachineController);
etatMachineRoute.delete("/:id", deleteEtatMachineController);
etatMachineRoute.put("/", updateEtatMachineController);

module.exports = etatMachineRoute;

