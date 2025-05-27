import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const userSocketMap = {};

export function getReceiverSocketId(userId){
    return userSocketMap[userId]
}

const io = new Server(server, {
    cors:{
        origin:[process.env.CLIENT_URL || "http://localhost:5173"],
        methods:["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        credentials: true
    },
});

io.on("connection", (socket) =>{
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;

    if(userId) userSocketMap[userId] = socket.id;

    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
        console.log("User socket map:", userSocketMap);
    }

    
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
})

export {io, app, server};