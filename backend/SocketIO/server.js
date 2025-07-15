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

// used to listen events on server side
io.on("connection", (socket) => {
    console.log("A User Connected", socket.id);

    //used to listen client side events emitted by server side (server & client)
    socket.on("disconnect", () => {
        console.log("A User Disconnected", socket.id);
    })
})

export {app, io, server}

