import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


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

export const login = async (req , res) => {
    try {
        const {email , password} = req.body

        const findUser = await Users.findOne({email})
        if(!findUser){
            return res.status(403).json({
                message : "Email người dùng không tồn tại"
            })
        }

        const checkPassword = bcrypt.compareSync(password , findUser.password)
        if(!checkPassword){
            return res.status(403).json({
                message : "Mật khẩu không chính xác"
            })
        }

        const accessToken = jwt.sign({
            id : findUser._id,
            email : findUser.email,
            role : findUser.role,
        }, process.env.ACCESSTOKEN_SCRET_KEY , {
            expiresIn : "1d"
        })

        const returnUser = {
            id : findUser._id ,
            username : findUser.username ,
            email : findUser.email ,
            role : findUser.role ,
            phone : findUser.phone
        }

        return res.status(200).json({
            message : "Đăng nhập thành công",
            returnUser,
            accessToken : {
                token : accessToken ,
                saveToken : setTokenLocalStorage(accessToken)
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error.message
        })
    }
}