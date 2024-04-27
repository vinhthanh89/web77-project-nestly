
import {axiosInstance} from './index'


export const fetchRoomData = async () => {
    return axiosInstance.get('/room/get-rooms')
}