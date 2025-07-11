import express from 'express'
import { allUsers, login, logOut, signUp } from '../controllers/user-controller.js'
import secureRoute from '../middlewares/secureRoute.js'
const userRouter = express.Router()

userRouter.post("/signup", signUp)
userRouter.post("/login", login)
userRouter.post("/logout", logOut)

userRouter.get("/allusers", secureRoute, allUsers)

export default userRouter