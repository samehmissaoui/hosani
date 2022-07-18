
const express = require("express");
const {
    getsousFamillePdrController,
    getsousFamillePdrByidController,
    addsousFamillePdrController,
    updatesousFamillePdrController,
    deletesousFamillePdrController,
    
} = require("../sousFamillePdr/sousFamillePdrController");

const sousFamillePdr = express.Router();

sousFamillePdr.get("/", getsousFamillePdrController);
sousFamillePdr.get("/:id",getsousFamillePdrByidController);
sousFamillePdr.post("/", addsousFamillePdrController);
sousFamillePdr.delete("/:id", deletesousFamillePdrController);
sousFamillePdr.put("/", updatesousFamillePdrController);

module.exports = sousFamillePdr;

