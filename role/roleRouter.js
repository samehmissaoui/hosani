
const express = require("express");
const {
    getRoleController,
    getRoleByidController,
    addRoleController,
    updateRoleController,
    deleteRoleController,
    
} = require("../role/roleController");

const RoleRoute = express.Router();

RoleRoute.get("/", getRoleController);
RoleRoute.get("/:id",getRoleByidController);
RoleRoute.post("/", addRoleController);
RoleRoute.delete("/:id", deleteRoleController);
RoleRoute.put("/", updateRoleController);

module.exports = RoleRoute;

