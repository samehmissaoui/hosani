
const express = require("express");
const {
    getDepartementController,
    getDepartementByidController,
    addDepartementController,
    updateDepartementController,
    deleteDepartementController,
    
} = require("../departement/departementController");

const Departementroute = express.Router();

Departementroute.get("/", getDepartementController);
Departementroute.get("/:id",getDepartementByidController);
Departementroute.post("/", addDepartementController);
Departementroute.delete("/:id", deleteDepartementController);
Departementroute.put("/", updateDepartementController);

module.exports = Departementroute;

