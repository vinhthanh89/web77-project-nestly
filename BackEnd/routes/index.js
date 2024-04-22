import {Router} from "express"


import userRouter from "./user.router.js"
import productRouter from "./product.router.js"

const router = Router()

// router.use("/user" , userRouter)
router.use("/user" , userRouter)
router.use('/product' , productRouter)


export default router