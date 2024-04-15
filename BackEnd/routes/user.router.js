import {Router} from "express"
import { login, signUp } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";

const router = Router();

router.post("/sign-up" , upload.single('avatar') , signUp);
router.post("/login" , login)


export default router