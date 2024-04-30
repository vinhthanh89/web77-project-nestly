
import {axiosInstance} from './index'


export const fetchRoomData = async (filter) => {
    return axiosInstance.get('/room/get-rooms' , {params : filter})
}

export const fetchCityOptions = async () => {
    return axiosInstance.get('/room/get-city-options')
}