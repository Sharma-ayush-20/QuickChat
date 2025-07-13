import express from 'express';
import 'dotenv/config.js';
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from './routes/user-route.js';
import cookieParser from 'cookie-parser';
import messageRouter from './routes/message-route.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}))

app.use("/api/user", userRouter)
app.use("/api/message", messageRouter)

// Default route
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URI}/chatapp`)
    .then(() => {
        console.log("MongoDB connected successfully");
        
        // Start the server only after DB connection
        app.listen(port, () => {
            console.log(`App is Listening at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });
