const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { workValidation } = require("../middlewares/work.middleware");
const { addTask, getTasksByProject } = require("../controllers/work.controller");

// Add task to a project
router.post("/:projectId/tasks", protect, workValidation, addTask);

// Get tasks of a project
router.get("/:projectId/tasks", protect, getTasksByProject);

module.exports = router;
