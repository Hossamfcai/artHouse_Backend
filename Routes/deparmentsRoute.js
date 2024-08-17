const express = require("express");
const router = express.Router();
const {
  createDepartment,
  getDepartments,
} = require("../Controllers/departmentsController");

router.post("/", createDepartment);
router.get("/", getDepartments);

module.exports = router;
