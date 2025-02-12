require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/projects", projectRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
