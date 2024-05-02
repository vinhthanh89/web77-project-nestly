import { Router } from "express";
import {
  getPagingRooms,
  getRooms,
  filterRoomByCity,
  filterRoomsByType,
  getRoomById,
  getCityOptions,
  createRoom,
  getDataRoom,
  deleteRoom,
} from "../controllers/room.controller.js";
import { authentication } from "../middlewares/authentication.js";

const router = Router();

router.post("/create-rooms", createRoom)
router.get("/get-rooms", getRooms);
router.get('/get-data-room' , getDataRoom);
router.get('/get-room/:id' , getRoomById)
router.get('/get-city-options' , getCityOptions)
router.get("/get-paging-rooms", getPagingRooms);
router.delete('/delete/:id' , deleteRoom)

export default router;
