const Project = require("../models/Project");

const addProject = async (title, link) => {
  const newProject = new Project({ title, link });
  await newProject.save();
  return newProject;
};

const getProjects = async () => {
  return await Project.find();
};

const updateProject = async (id, title, link) => {
  return await Project.findByIdAndUpdate(id, { title, link }, { new: true });
};

const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};

module.exports = { addProject, getProjects, updateProject, deleteProject };
