import mongoose from "mongoose";
import User from '../models/user-model.js'
import Message from "./message-model.js";

const conversationSchema = new mongoose.Schema({

    //members => (senderId, receiverId)
    members:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }
    ],

    //messages => (messagesSendId, messagesReceiveId)
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Message,
            default: []
        }
    ]

}, {timestamps: true})

const Conversation = new mongoose.model("conversation", conversationSchema)

export default Conversation