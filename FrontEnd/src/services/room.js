import {axiosInstance} from './index.js'

export const fetchRoomData = async () => {
    return axiosInstance.get('/room/get-rooms')
}