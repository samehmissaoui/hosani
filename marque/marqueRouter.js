
const express = require("express");
const {
    getMarqueController,
    getMarqueByidController,
    addMarqueController,
    updateMarqueController,
    deleteMarqueController,
    
} = require("../marque/marqueController");

const marqueRoute = express.Router();

marqueRoute.get("/", getMarqueController);
marqueRoute.get("/:id",getMarqueByidController);
marqueRoute.post("/", addMarqueController);
marqueRoute.delete("/:id", deleteMarqueController);
marqueRoute.put("/", updateMarqueController);

module.exports = marqueRoute;

