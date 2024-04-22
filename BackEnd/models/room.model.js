import mongoose from "mongoose";

const Room = new mongoose.Schema({
    type : {
        type : String,
        required : true
    },
    city : {
        type : String,
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
        type : Number,
        required : true
    },
    numberOfBedrooms : {
        type : Number ,
        required : true
    },
    image : {
        type : Array
    },
    description : {
        type : String
    },
    price : {
        type : Number,
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
} , {
    timestamps : true
})

export default mongoose.model('rooms' , Room)