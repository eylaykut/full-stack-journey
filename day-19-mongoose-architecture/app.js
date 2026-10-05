const express = require("express");
const connectDB = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/notes", noteRoutes);

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
