
const express = require("express");
const {
    getActionController,
    getActionByidController,
    addActionController,
    updateActionController,
    deleteActionController,
    
} = require("../action/actionController");

const actionroute = express.Router();

actionroute.get("/", getActionController);
actionroute.get("/:id",getActionByidController);
actionroute.post("/", addActionController);
actionroute.delete("/:id", deleteActionController);
actionroute.put("/", updateActionController);

module.exports = actionroute;

