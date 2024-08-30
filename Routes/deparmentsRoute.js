const express = require("express");
const router = express.Router();
const department = require("../Controllers/departmentsController");
const auth = require("../middleware/auth");
require("dotenv").config();
router.post(
  "/",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  department.createDepartment
);
router.get("/", department.getDepartments);
router.delete(
  "/deleteDepartment/:departmentId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  department.deleteDepartment
);

module.exports = router;
