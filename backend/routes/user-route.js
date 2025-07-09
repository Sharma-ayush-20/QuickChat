import express from 'express'
import { login, logOut, signUp } from '../controllers/user-controller.js'
const userRouter = express.Router()

userRouter.post("/signup", signUp)
userRouter.post("/login", login)
userRouter.post("/logout", logOut)

export default userRouter