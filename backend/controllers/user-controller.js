import createTokenAndSaveCookie from "../jwt/generateToken.js";
import User from "../models/user-model.js";
import bcrypt from 'bcryptjs'

const signUp = async (req, res) => {
    try {
        
        const {fullname, email, password, confirmPassword} = req.body;

        if (!fullname || !email || !password || !confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Please provide all details",
            })
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password do not match"
            })
        }

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                success: false,
                message: "User is already existed"
            })
        }

        // hashing the password 
        let salt = 10;
        let hashPassword = await bcrypt.hash(password, salt)

        const newUser = await User({
            fullname,email,password : hashPassword
        })

        await newUser.save();

        //generateToken for user
        createTokenAndSaveCookie(newUser._id, res);

        return res.status(200).json({
            success: true,
            message: "User Created SuccessFully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })

    }
}

export {
    signUp,       
}

