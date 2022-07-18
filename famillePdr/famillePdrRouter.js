
const express = require("express");
const {
    getfamillePdrController,
    getfamillePdrByidController,
    addfamillePdrController,
    updatefamillePdrController,
    deletefamillePdrController
    
} = require("../famillePdr/famillePdrController");

const famillePdr = express.Router();

famillePdr.get("/", getfamillePdrController);
famillePdr.get("/:id",getfamillePdrByidController);
famillePdr.post("/", addfamillePdrController);
famillePdr.delete("/:id", deletefamillePdrController);
famillePdr.put("/", updatefamillePdrController);

module.exports = famillePdr;

