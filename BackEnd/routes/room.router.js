import { Router } from "express";
import {
  getPagingRooms,
  getRooms,
  filterRoomByCity,
  filterRoomsByType,
  getRoomById,
  getCityOptions,
} from "../controllers/room.controller.js";
import { authentication } from "../middlewares/authentication.js";

const router = Router();

router.get("/get-rooms", getRooms);
router.get('/get-room/:id' , getRoomById)
router.get('/get-city-options' , getCityOptions)
router.get("/get-paging-rooms", getPagingRooms);

export default router;
