import {Router} from "express"
import { signUp } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";

const router = Router();

router.post("/sign-up" , upload.single('avatar') , signUp)


export default router