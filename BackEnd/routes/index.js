import {Router} from "express"


import userRouter from "./user.router.js"
import roomRouter from "./room.router.js"
import { refreshAccessToken } from "../middlewares/authentication.js"

const router = Router()

// router.use("/user" , userRouter)
router.use("/user" , userRouter)
router.use('/room' , roomRouter)
router.post('/refresh-access-token', refreshAccessToken)


export default router