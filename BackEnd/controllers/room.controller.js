

import Room from "../models/room.model.js"

export const getRooms = async (req , res) => {
    try {
        const rooms = await Room.find()

        return res.status(200).json({
            message : "Lấy dữ liệu Room thành công",
            rooms
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const getPagingRooms = async (req , res) => {
    try {
        const {pageSize , pageIndex} = req.query

        const [room , totalDocument] = await Promise.all([
            await Room.find().skip(pageSize * (pageIndex - 1)).limit(pageSize) ,
            await Room.countDocuments()
        ])
        const totalPage = Math.ceil(totalDocument / pageSize)

        return res.status(200).json({
            message : "Lấy dữ liệu thành công",
            room ,
            totalPage
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const filterRoomByCity = async (req , res) => {
    try {
        const cityKeyword = req.query.city

        const roomFiltered = await Room.find({city : cityKeyword})
        if(!roomFiltered){
            return res.status(404).json({
                message : "Not Found"
            })
        }

        return res.status(200).json({
            message : "Lấy dữ liệu thành công",
            roomFiltered
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const filterRoomsByType = async (req , res) => {
    try {
        const typeKeyword = req.query.type

        const roomFiltered = await Room.find({type : typeKeyword})
        if(!roomFiltered){
            return res.status(404).json({
                message : "Not Found"
            })
        }

        return res.status(200).json({
            message : "Tìm kiếm dữ liệu thành công",
            roomFiltered
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

