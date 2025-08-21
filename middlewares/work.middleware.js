const { body } = require("express-validator");

exports.workValidation = [
  body("taskName")
    .notEmpty().withMessage("Task name is required"),

  body("status")
    .optional()
    .isIn(["Open", "Ongoing", "Close", "Re Open", "In Review"])
    .withMessage("Invalid status value"),

  body("startDate")
    .optional()
    .isISO8601().withMessage("Start date must be a valid date"),
];
