import {CloudinaryStorage} from "multer-storage-cloudinary"
import cloudinary from "../configs/cloudinary.js"
import multer from "multer"


const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "png", "jpeg"],
    params : {
        folder : "Nestly"
    }
})

export const upload = multer({storage})