import jwt from 'jsonwebtoken'

export const signAccessToken = (payload) => {
    const accessToken = jwt.sign({
        payload,
    } , process.env.ACCESSTOKEN_SCRET_KEY , {
        expiresIn : '1d'
    })

    return accessToken
}

export const signRefreshToken = (payload) => {
    const refreshToken = jwt.sign({
        payload,
    } , process.env.ACCESSTOKEN_SCRET_KEY)

    return refreshToken
}

export const verifyToken = (token , SCRET_KEY) => {
    const verify = jwt.verify(token ,  SCRET_KEY)

    if(verify){
        return verify
    }

    return null
}
