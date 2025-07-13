import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({

    //kon message bheja hai
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    //kon message receive kiya hai
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    //kya message hai
    message:{
        type: String,
        required: true,
    }

}, {timestamps: true})

const Message = new mongoose.model("Message", messageSchema)

export default Message;