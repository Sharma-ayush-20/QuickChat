import { Server } from "socket.io"
import http from "http"
import express from "express"

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true, 
    }
})

//realtime messaging code goes here
export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
};

const users = {}

// used to listen events on server side
io.on("connection", (socket) => {
    console.log("A User Connected", socket.id);

    const userId = socket.handshake.query.userId
    if(userId){
        users[userId] = socket.id;
        console.log(" Hello ", users)
    }

    //used to send the events to all connected users
    io.emit("getOnlineUsers", Object.keys(users));

    //used to listen client side events emitted by server side (server & client)
    socket.on("disconnect", () => {
        console.log("A User Disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    })
})

export {app, io, server}

