import Jwt from "jsonwebtoken"

export const generateActiveToken = (payload: object) => {
    return Jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, { expiresIn: "10m" })
}
export const generateAccessToken = (payload: object) => {
    return Jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "15m" })
}

export const generateRefreshToken = (payload: object) => {
    return Jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, { expiresIn: "10m" })
}