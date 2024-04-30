import { Router } from "express";
import {
  changeUserPassword,
  deleteUser,
  editUser,
  findUser,
  getPagingUser,
  getUser,
  getUserById,
  login,
  signUp,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";
import { authentication } from "../middlewares/authentication.js";
// import { authorization } from "../middlewares/authorization.js";

const router = Router();

router.post("/sign-up", upload.single("avatar"), signUp);
router.post("/login", login);
router.get("/get-user", getUser);
router.get("/get-user-by-id/:id", authentication, getUserById);
router.get("/get-paging-user", getPagingUser);
router.put("/edit/:id", authentication, editUser);
router.put("/change-password/:id", authentication, changeUserPassword);
router.delete("/delete/:id", authentication, deleteUser);
router.get("/find-user", findUser);
// router.get('/refresh-accesstoken', refreshAccessToken)

export default router;
