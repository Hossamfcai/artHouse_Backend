const express = require("express");
const router = express.Router();
const userType = require("../Controllers/userTypeController");

router.post("/createUserType", userType.createUserType);

module.exports = router;
