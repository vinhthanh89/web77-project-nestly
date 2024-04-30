import { signAccessToken, verifyToken } from "../utils/jwtoken.js";

export const authentication = async (req, res, next) => {
  try {
    const accessToken = req.headers.accesstoken;

    if (!accessToken) {
      return res.status(401).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    const verify = verifyToken(accessToken, process.env.ACCESSTOKEN_SCRET_KEY);
    if (!verify) {
      return res.status(401).json({
        message: "Xác thực token thất bại",
      });
    }

    req.user = verify.payload;

    next();
  } catch (error) {
    if (error.message === "jwt expired") {
      return res.status(200).json({
        msg: error.message,
      });
    }

    return res.status(500).json({
      error: error.name,
      message: error.message,
    });
  }
};

// export const refreshAccessToken = async (req , res) => {
//     try {
//         const bearerToken = req.headers.refreshtoken

//         if(!bearerToken){
//             return res.status(401).json({
//                 message : "Không có refresh token"
//             })
//         }

//         const token = bearerToken.split(" ")[1];
//         const verify = verifyToken(token , process.env.REFRESHTOKEN_SCRET_KEY)
//         if(!verify){
//             return res.status(401).json({
//                 message : "Xác thực token thất bại"
//             })
//         }

//         const accessToken = signAccessToken(verify)

//         return res.status(200).json(accessToken)

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message : error
//         })
//     }
// }
