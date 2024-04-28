import mongoose from "mongoose"

const User = new mongoose.Schema({
    username : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    avatar : {
        type : String ,
        default : "https://res.cloudinary.com/du6uinlwy/image/upload/v1714291770/download_wesi0a.jpg"
    },
    phone : {
        type : String ,
        required : true
    },
    role : {
        type : String ,
        default : "member",
    }
} , {
    timestamps : true
})

export default mongoose.model("users" , User)