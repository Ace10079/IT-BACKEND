const { registerAdmin, loginAdmin } = require("../services/adminService");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const response = await registerAdmin(email, password, role);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const response = await loginAdmin(email, password, role);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { register, login };
