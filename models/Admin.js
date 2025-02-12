const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["teacher", "hod"], required: true }, // Role field added
});

module.exports = mongoose.model("Admin", adminSchema);
