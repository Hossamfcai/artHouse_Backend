const express = require("express");
const router = express.Router();
const admin = require("../Controllers/adminController");

router.post("/signUp", admin.signUp);
router.post("/login", admin.login);
router.get("/admins", admin.getAdmins);

module.exports = router;
