
import {axiosInstance, axiosInstanceAuth} from './index'


export const fetchRoomData = async (filter) => {
    return axiosInstance.get('/room/get-rooms' , {params : filter})
}

export const getRoomData = async () => {
    return axiosInstance.get('/room/get-data-room')
}

export const getPagingRoomData = async ({pageSize , pageIndex}) => {
    return axiosInstanceAuth.get(`/room/get-paging-rooms?pageSize=${pageSize}&pageIndex=${pageIndex}`)
}

export const fetchCityOptions = async () => {
    return axiosInstance.get('/room/get-city-options')
}

export const fetchRoomById = async (roomId) => {
    return axiosInstance.get(`/room/get-room/${roomId}`)
}

export const deleteRoom = async (roomId) => {
    return axiosInstanceAuth.delete(`/room/delete/${roomId}`)
}