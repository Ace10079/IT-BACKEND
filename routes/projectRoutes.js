const express = require("express");
const { createProject, listProjects, editProject, removeProject } = require("../controllers/projectController");

const router = express.Router();

router.post("/post", createProject);
router.get("/get", listProjects);
router.put("/update/:id", editProject);
router.delete("/delete/:id", removeProject);

module.exports = router;
