const express = require('express')

const {createUserController,
    getUserController, 
    loginUserController ,logoutUserController} = require ('./userController')
const auth = require('../middlewares/authentication')


const userRouter = express.Router();

userRouter.post('/register',createUserController)
userRouter.get('/',getUserController)
userRouter.delete('/logout',auth, logoutUserController
)
userRouter.post('/login',loginUserController);


module.exports = userRouter