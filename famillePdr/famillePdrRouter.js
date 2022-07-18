
const express = require("express");
const {
    getfamillePdrController,
    getfamillePdrByidController,
    addfamillePdrController,
    updatefamillePdrController,
    deletefamillePdrController
    
} = require("../famillePdr/famillePdrController");

const famillePdrroute = express.Router();

famillePdrroute.get("/", getfamillePdrController);
famillePdrroute.get("/:id",getfamillePdrByidController);
famillePdrroute.post("/", addfamillePdrController);
famillePdrroute.delete("/:id", deletefamillePdrController);
famillePdrroute.put("/", updatefamillePdrController);

module.exports = famillePdrroute;

