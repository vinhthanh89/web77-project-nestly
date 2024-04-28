import { Router } from "express"

import roomRouter from "./room.router.js"
import userRouter from "./user.router.js"

const router = Router()

// router.use("/user" , userRouter)
router.use("/user" , userRouter)
router.use('/room' , roomRouter)

export default router