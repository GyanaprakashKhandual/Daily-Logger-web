const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { projectValidation } = require("../middlewares/project.middleware");
const { createProject, getProjects } = require("../controllers/project.controller");

router.post("/", protect, projectValidation, createProject);
router.get("/", protect, getProjects);

module.exports = router;
