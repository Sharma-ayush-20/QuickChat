import createTokenAndSaveCookie from "../jwt/generateToken.js";
import User from "../models/user-model.js";
import bcrypt from 'bcryptjs'

const signUp = async (req, res) => {
    try {

        const { fullname, email, password, confirmPassword } = req.body;

        if (!fullname || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please provide all details",
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password do not match"
            })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User is already existed"
            })
        }

        // hashing the password 
        let salt = 10;
        let hashPassword = await bcrypt.hash(password, salt)

        const newUser = await User({
            fullname, email, password: hashPassword
        })

        await newUser.save();

        //generateToken for user
        createTokenAndSaveCookie(newUser._id, res);

        return res.status(200).json({
            success: true,
            message: "User Created SuccessFully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password is required" })
        }

        const existedUser = await User.findOne({ email })

        if (!existedUser) {
            return res.status(400).json({ success: false, message: "email not existed. plz signup" })
        }

        //check password is correct or not
        const matchPassword = await bcrypt.compare(password, existedUser.password)

        if (!matchPassword) {
            return res.status(400).json({ success: false, message: "password is incorrect" })
        }

        createTokenAndSaveCookie(existedUser._id, res)

        return res.status(200).json({
            success: true, message: "User Login SuccessFully",
            user: {
                _id: existedUser._id,
                fullname: existedUser.fullname,
                email: existedUser.email,
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const logOut = async (req, res) => {
    try {

        res.clearCookie("jwt")

        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//get all user from database
const allUsers = async (req, res) => {
    try {
        const currentUserId = req.user._id;

        const allUsers = await User.find({
            _id: { $ne: currentUserId } 
        }).select("-password");

        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No User Found"
            });
        }

        return res.status(200).json({
            success: true,
            allUsers,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
export {
    signUp,
    login,
    logOut,
    allUsers,
}

