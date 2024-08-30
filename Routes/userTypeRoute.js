const express = require("express");
const router = express.Router();
const userType = require("../Controllers/userTypeController");
const auth = require("../middleware/auth");
require("dotenv").config();
router.post(
  "/createUserType",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID),
  userType.createUserType
);

module.exports = router;
