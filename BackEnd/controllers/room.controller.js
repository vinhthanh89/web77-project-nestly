

import Room from "../models/room.model.js"
import toSlug from "../utils/toSlug.js";

export const getRooms = async (req , res) => {
    try {
        let {type , city , sort} = req.query;

        let filterQuery = {
            type : type,
            city : city
          }
      
          let sortQuery = {
            rentPrice : sort
          }
      
          if(type === 'all' && city === 'all'){
            filterQuery = {}
          }
      
          if(type === 'all' && city !== 'all'){
              filterQuery = {city : city}
          }
          
          if(type !== 'all' && city === 'all'){
              filterQuery = {type : type}
          }
      
          if(sort === '0'){
            sortQuery = {}
          }

        const rooms = await Room.find(filterQuery).sort(sortQuery);

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

export const getDataRoom = async (req , res) => {
    try {
        const rooms = await Room.find()

        return res.status(200).json({
            message : "Lấy dữ liệu Room thành công",
            rooms
        })
    } catch (error) {
        console.log(error);
        return req.status(500).json({
            message : error
        })
    }
}

export const createRoom = async (req, res) => {
    const city = req.body.city
    const district = req.body.district
    const address = req.body.address
    const area = req.body.area
    const numberOfBedrooms = req.body.numberOfBedrooms
    const rentPrice = req.body.rentPrice
    const description =req.body.description
    const type = req.body.type
    const owner = req.body.owner
    const bookingDate = req.body.bookingDate
    const slug = toSlug(city, district, address)
    try {
        const result = await Room.create({
            city:city,
            district:district,
            address:address,
            area:area,
            numberOfBedrooms:numberOfBedrooms,
            rentPrice:rentPrice,
            description : description,
            type:type,
            owner:owner,
            bookingDate:bookingDate,
            slug
        })

        return res.status(201).json({ room: result })
    } catch (error) {
        return res.status(500).json(error)
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

export const getRoomById = async (req , res) => {
    try {
        const roomId = req.params.id

        const findRoom = await Room.findById(roomId);

        return res.status(200).json({
            message : "Lấy dữ liệu thành công",
            findRoom
        })

    } catch (error) {
        console.log(error);
    }
}

export const getCityOptions = async (req , res) => {
    try {
        const roomData = await Room.find()
        const cityArray = [];

        for(const room of roomData){
            if(cityArray.includes(room.city) === false){
                cityArray.push(room.city)
            }
        }

        return res.status(200).json({
            message : "Lấy dữ liệu thành công",
            cityArray
        })

    } catch (error) {
        console.log(error);
    }
}

export const deleteRoom = async (req , res) => {
    try {
        const roomId = req.params.id

        await Room.findByIdAndDelete(roomId);

        return res.status(201).json({
            message : "Xóa dữ liệu thành công"
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

