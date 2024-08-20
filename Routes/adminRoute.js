const express = require("express");
require("dotenv").config();
const router = express.Router();
const admin = require("../Controllers/adminController");
const auth = require("../middleware/auth");

router.post("/signUp", admin.signUp);
router.post("/login", admin.login);
router.get(
  "/admins",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID),
  admin.getAdmins
);

module.exports = router;
