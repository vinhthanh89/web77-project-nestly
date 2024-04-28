import {Router} from "express"
import { changeUserPassword, deleteUser, editUser, findUser, getPagingUser, getUser, login, signUp } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";
import { authentication } from "../middlewares/authentication.js";
// import { authorization } from "../middlewares/authorization.js";

const router = Router();



router.post("/sign-up" , upload.single('avatar') , signUp);
router.post("/login" , login)
router.get('/get-user' , authentication , getUser);
router.get('/get-paging-user' , getPagingUser)
router.put('/edit/:id' , authentication , editUser)
router.put('/change-password/:id' , authentication , changeUserPassword)
router.delete('/delete/:id' , authentication , deleteUser)
router.get('/find-user' , findUser)
// router.get('/refresh-accesstoken', refreshAccessToken)



export default router;