import mongoose from "mongoose";

const Room = new mongoose.Schema({
    city : {
        type : String ,
        required : true
    },
    district : {
        type : String ,
        required : true
    },
    address : {
        type : String ,
        required : true
    },
    area : {
        type : Number ,
    },
    numberOfBedrooms : {
        type : Number ,
    },
    rentPrice : {
        type : Number ,
        required : true
    },
    images : {
        type : Array,
    },
    description : {
        type : String ,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    owner : {
        type : String ,
        required : true
    },
    bookingDate : {
        type : Array ,
    }
} , {
    timestamps : true
})

export default mongoose.model('rooms' , Room)