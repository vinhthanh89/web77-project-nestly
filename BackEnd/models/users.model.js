import mongoose from "mongoose"

const Users = new mongoose.Schema({
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
    },
    phone : {
        type : String ,
        required : true
    },
    role : {
        type : String ,
        default : "member",
    }
})

export default mongoose.model("users" , Users)