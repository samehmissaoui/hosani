const express = require("express");

const {
  createUserController,
  getUserController,
  loginUserController,
  logoutUserController,
  updateUserController,
  getUserByIdController
} = require("./userController");
const auth = require("../middlewares/authentication");

const userRouter = express.Router();

userRouter.get("/:id", getUserByIdController);
userRouter.post("/register", createUserController);
userRouter.get("/", getUserController);
userRouter.delete("/logout", auth, logoutUserController);
userRouter.post("/login", loginUserController);
userRouter.put("/", updateUserController);

module.exports = userRouter;
