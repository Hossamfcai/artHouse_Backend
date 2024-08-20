const express = require("express");
const router = express.Router();
const department = require("../Controllers/departmentsController");

router.post("/", department.createDepartment);
router.get("/", department.getDepartments);
router.delete("/deleteDepartment/:departmentId", department.deleteDepartment);

module.exports = router;
