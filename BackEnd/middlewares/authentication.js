import { verifyToken } from "../utils/jwtoken.js";

export const authentication =  async (req , res , next) => {
    try {
        const bearerToken = req.headers.authorization
        if(!bearerToken){
            return res.status(401).json({
                message : "Bạn chưa đăng nhập"
            })
        }

        const token = bearerToken.split(' ')[1];

        const verify = verifyToken(token)
        console.log(verify);
        if(!verify){
            return res.status(401).json({
                message : "Xác thực token thất bại"
            })
        }

        next()

    } catch (error) {
        return res.status(500).json({
            error : error.name,
            message : error.message
        })
    }
}