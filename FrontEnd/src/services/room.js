
import {axiosInstance} from './index'


export const fetchRoomData = async () => {
    return axiosInstance.get('/room/get-rooms')
}

export const fetchCityOptions = async () => {
    return axiosInstance.get('/room/get-city-options')
}