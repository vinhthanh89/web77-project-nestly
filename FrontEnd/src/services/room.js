
import {axiosInstance} from './index'


export const fetchRoomData = async (filter) => {
    return axiosInstance.get('/room/get-rooms' , {params : filter})
}

export const fetchCityOptions = async () => {
    return axiosInstance.get('/room/get-city-options')
}

export const fetchRoomById = async (roomId) => {
    return axiosInstance.get(`/room/get-room/${roomId}`)
}