const { addProject, getProjects, updateProject, deleteProject } = require("../services/projectService");

const createProject = async (req, res) => {
  try {
    const { title, link } = req.body;
    const project = await addProject(title, link);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listProjects = async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, link } = req.body;
    const updatedProject = await updateProject(id, title, link);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeProject = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProject(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProject, listProjects, editProject, removeProject };
