import Message from '../models/message-model.js'
import Conversation from '../models/conversation-model.js'
import { getReceiverSocketId } from '../SocketIO/server.js';
import { io } from '../SocketIO/server.js';


const sendMessage = async (req, res) => {
    try {
        // res.send("Message Sent " + req.params.id + " " + req.body.message)

        const senderId = req.user._id;

        if(!senderId){
            return res.status(400).json({
                success: false,
                message: "No Sender ID Found"
            })
        }

        const receiverId = req.params.id;

        if(!receiverId){
            return res.status(400).json({
                success: false,
                message: "Waiting for receiverId"
            })
        }

        const message = req.body.message?.trim();

        if (!message || message.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Message cannot be empty"
            });
        }

        //check karunga ki conversation hai ki nhii agar nahi hai toh create karunga nhi toh uske andar add karunga message
        let conversation = await Conversation.findOne({
            members: {
                $all: [senderId, receiverId]
            },
        })

        if(!conversation){
            conversation = await Conversation.create({
                members: [senderId, receiverId],
            })
        }

        const newMessage = new Message({senderId, receiverId, message})

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        return res.status(200).json({
            success: true,
            message: "Message Send Successfully",
            newMessage
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server Error in SendMessage Controllers"
        })
    }
}

const getMessage = async (req, res) => {
    try {   
        
        //sender id liya
        const senderId = req.user._id;

        if(!senderId){
            return res.status(400).json({
                success: false,
                message: "No Sender ID Found"
            })
        }

        //receiver id liya
        const receiverId = req.params.id;

        if(!receiverId){
            return res.status(400).json({
                success: false,
                message: "Waiting for receiverId"
            })
        }

        //conversation check karna hai ki conversation hai ki nhi sender aur receiver ke beach nhi hai toh empty array
        //hai toh  conversation ke andar message ko display karo
        let conversation = await Conversation.findOne({
            members: {$all: [senderId, receiverId]}
        }).populate("messages")

        if(!conversation){
            return res.status(201).json([])
        }   

        const messages = conversation.messages;

        return res.status(200).json(messages)

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server Error in getMessage Controllers"
        })
    }
}

export {
    sendMessage,
    getMessage,
}