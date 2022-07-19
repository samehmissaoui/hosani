const express = require("express");
const {
  getDeviseController,
  getDeviseByidController,
  addDeviseController,
  updateDeviseController,
  deleteDeviseController,
} = require("../devise/deviseController");

const deviseRouter = express.Router();

deviseRouter.get("/", getDeviseController);
deviseRouter.get("/:id", getDeviseByidController);
deviseRouter.post("/", addDeviseController);
deviseRouter.delete("/:id", deleteDeviseController);
deviseRouter.put("/", updateDeviseController);

module.exports = deviseRouter;
