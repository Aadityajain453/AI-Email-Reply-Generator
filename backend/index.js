const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, ".env")
});

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const replyRoutes = require("./routes/replyRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

// Routes
app.use("/api", replyRoutes);
app.use("/api", authRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("AI Email Reply Generator Backend Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});