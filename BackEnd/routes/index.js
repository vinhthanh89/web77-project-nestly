import {Router} from "express"


import userRouter from "./user.router.js"

const router = Router()

router.use("/user" , userRouter)


export default router