import jwt from 'jsonwebtoken'
import User from '../models/user-model.js'

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "No Token Found"
            });
        }
        //userId mila
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //user model me userId find kiya
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = user;

        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Invalid token",
        });
    }
};

export default secureRoute;
