const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const registerAdmin = async (email, password, role) => {
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) throw new Error("Admin already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({ email, password: hashedPassword, role });

  await newAdmin.save();
  return { message: "Admin registered successfully" };
};

const loginAdmin = async (email, password, role) => {
  const admin = await Admin.findOne({ email, role }); // Ensure correct role is used
  if (!admin) throw new Error("Admin not found");

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ adminId: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return { token, role: admin.role }; // Return role in response
};

module.exports = { registerAdmin, loginAdmin };
