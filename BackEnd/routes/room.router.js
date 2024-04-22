import {Router} from 'express'
import { getPagingRooms, getRooms, filterRoomByCity, filterRoomsByType } from '../controllers/room.controller.js'

const router = Router()

router.get('/get-rooms' , getRooms)
router.get('/get-paging-rooms' , getPagingRooms)
router.get('/filterByCity', filterRoomByCity)
router.get('/filterByType' , filterRoomsByType)


export default router