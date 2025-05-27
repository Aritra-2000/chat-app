import express from "express";
import authRouter from "./routes/auth.route.js";
import messagesRoute from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";


// Configure environment variables
dotenv.config();


const PORT = process.env.PORT || 5001; // Add fallback port

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messagesRoute);

// Error handling middleware (should be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB().catch(err => console.error("Database connection failed:", err));
});