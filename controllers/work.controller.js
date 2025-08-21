const { validationResult } = require("express-validator");
const Work = require("../models/work.model");
const Project = require("../models/project.model");

// Add Task to Project
exports.addTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { projectId } = req.params;
    const { taskName, status, assignTo, startDate, endDate, hours, githubLink, reportLink } = req.body;

    // check project ownership
    const project = await Project.findOne({ _id: projectId, user: req.user._id });
    if (!project) {
      return res.status(404).json({ message: "Project not found or not owned by user" });
    }

    const task = await Work.create({
      user: req.user._id,
      project: project._id,
      taskName,
      status,
      assignTo,
      startDate,
      endDate,
      hours,
      githubLink,
      reportLink
    });

    res.status(201).json({ message: "Task created", task });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get tasks of a project
exports.getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    // check project ownership
    const project = await Project.findOne({ _id: projectId, user: req.user._id });
    if (!project) {
      return res.status(404).json({ message: "Project not found or not owned by user" });
    }

    const tasks = await Work.find({ project: project._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { projectId, taskId } = req.params;
    const { taskName, status, assignTo, startDate, endDate, hours, githubLink, reportLink } = req.body;

    // check project ownership
    const project = await Project.findOne({ _id: projectId, user: req.user._id });
    if (!project) {
      return res.status(404).json({ message: "Project not found or not owned by user" });
    }

    const task = await Work.findOneAndUpdate(
      { _id: taskId, project: project._id, user: req.user._id },
      { taskName, status, assignTo, startDate, endDate, hours, githubLink, reportLink },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task updated", task });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;

    // check project ownership
    const project = await Project.findOne({ _id: projectId, user: req.user._id });
    if (!project) {
      return res.status(404).json({ message: "Project not found or not owned by user" });
    }

    const task = await Work.findOneAndDelete({
      _id: taskId,
      project: project._id,
      user: req.user._id
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
