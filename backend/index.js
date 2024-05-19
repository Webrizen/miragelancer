require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const dbConfig = require("./config/database");
const authRoute = require("./routes/authRoute");
const jobRoute = require("./routes/jobRoutes");
const bidRoute = require("./routes/bidRoutes");
const reviewRoute = require("./routes/reviewRoute");
const messageRoute = require("./routes/messageRoute");
const Message = require("./models/Message");
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3001;

// Initialize Express and create server
const app = express();
// Allow all origins during development, replace with specific origin in production
app.use(cors());
const server = http.createServer(app);
const frontendOrigin = process.env.FRONTEND || "http://localhost:3000";
const io = new Server(server, {
  cors: {
    origin: frontendOrigin,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

app.set("io", io);
io.on("connection", (socket) => {
  console.log("New client connected");

  // Listen for new messages
  socket.on("newMessage", async (data) => {
    try {
      const message = new Message({
        sender: data.sender,
        recipient: data.recipient,
        content: data.content,
      });
      await message.save();

      // Broadcast the new message to all connected clients
      io.emit("newMessage", message);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  // Listen for disconnect
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Middleware
app.use(bodyParser.json());

mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to Miragelancer! Next Gen AI powered Freelancing Platform For New Age.");
});

app.use('/api/auth', authRoute);
app.use('/api/jobs', jobRoute);
app.use('/api/bids', bidRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/messages', messageRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});