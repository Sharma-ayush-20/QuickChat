import jwt from 'jsonwebtoken'

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "10d"})
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    })
    // console.log("JWT token set:", token);
}

export default createTokenAndSaveCookie;