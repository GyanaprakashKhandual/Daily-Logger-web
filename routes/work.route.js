const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { workValidation } = require("../middlewares/work.middleware");
const { addTask, getTasksByProject, updateTask, deleteTask } = require("../controllers/work.controller");

// Add task to a project
router.post("/:projectId/tasks", protect, workValidation, addTask);

// Get tasks of a project
router.get("/:projectId/tasks", protect, getTasksByProject);

router.put("/:projectId/:taskId", protect, updateTask);
router.delete("/:projectId/:taskId", protect, deleteTask);

module.exports = router;
