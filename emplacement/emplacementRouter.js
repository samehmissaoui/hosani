
const express = require("express");
const {
    getEmplacementController,
    getEmplacementByidController,
    addEmplacementController,
    updateEmplacementController,
    deleteEmplacementController,
} = require("../emplacement/emplacementController");

const emplacementroute = express.Router();

emplacementroute.get("/", getEmplacementController);
emplacementroute.get("/:id",getEmplacementByidController);
emplacementroute.post("/", addEmplacementController);
emplacementroute.delete("/:id", deleteEmplacementController);
emplacementroute.put("/", updateEmplacementController);

module.exports = emplacementroute;

