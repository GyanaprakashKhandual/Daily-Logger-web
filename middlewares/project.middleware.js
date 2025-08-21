const { body } = require("express-validator");

exports.projectValidation = [
  body("projectName")
    .notEmpty().withMessage("Project name is required")
    .isLength({ min: 3 }).withMessage("Project name must be at least 3 characters long")
];
