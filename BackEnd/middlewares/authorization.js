export const authorization = async (req , res , next) => {
    try {
        const user = req.user

        if(user.role !== "admin"){
            return res.status(401).json({
                message : "Bạn không có quyền hạn truy cập chức năng này"
            })
        }

        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}