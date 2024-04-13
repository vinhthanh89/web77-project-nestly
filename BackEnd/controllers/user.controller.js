import bcrypt from "bcryptjs"


import Users from "../models/users.model.js"
import { signUpValidate } from "../validations/user.validate.js";
import { validateData } from "../validations/validates.js";
import cloudinary from "../configs/cloudinary.js";

export const signUp = async (req , res) => {
    try {
        const {username , email , password , phone} = req.body;
        const avatar = req.file

        const validate = validateData(req.body , signUpValidate);
        if(validate){
            cloudinary.uploader.destroy(avatar.filename)
            return res.status(403).json({
                message : validate
            })
        }

        const findUser = await Users.findOne({email})
        if(findUser){
            cloudinary.uploader.destroy(avatar.filename)
            return res.status(403).json({
                message : "Email người dùng đã tồn tại"
            })
        }
        
        const hashPassword = bcrypt.hashSync(password , bcrypt.genSaltSync())

        await Users.create({
            username,
            email,
            password : hashPassword,
            avatar : avatar.path,
            phone
        })

        return res.status(201).json({
            message : "Tạo người dùng thành công",
            user : {
                username , 
                email ,
                phone
            }
        })

    } catch (error) {
        console.log(error);
        cloudinary.uploader.destroy(avatar.filename)
        return res.status(500).json({
            message : error.message
        })
    }
}