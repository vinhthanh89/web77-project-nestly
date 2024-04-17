import {Router} from "express"
import { changeUserPassword, deleteUser, editUser, getPagingUser, getUser, login, signUp } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";
import { authentication } from "../middlewares/authentication.js";

const router = Router();


router.post("/sign-up" , upload.single('avatar') , signUp);
router.post("/login" , login)
router.get('/get-user' , authentication , getUser);
router.get('/get-paging-user' , getPagingUser)
router.put('/edit/:id' , editUser)
router.put('/change-password/:id' , changeUserPassword)
router.delete('/delete/:id' , deleteUser)


export default router